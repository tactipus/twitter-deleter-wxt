import type { WebRequest } from 'webextension-polyfill';

export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(() => {
    console.log('Deleter installed!');
  });
  
  const domain = 'x.com';
  let bearer_token = "";

  interface Cookie {
    name: string;
    value: string;
  }

  interface RequestHeaders {
    requestHeaders?: WebRequest.HttpHeaders;
  }

  interface Tab {
    id: number;
    url: string;
  }

  interface DateRange {
    start: string;
    end: string;
  }

  interface UserInputs {
    username: string;
    keywords: string;
  }

  async function getCookies(): Promise<string[]> {
    try {
      const cookies = await browser.cookies.getAll({ domain: domain });
      const requiredCookies = ['auth_token', 'ct0', 'kdt', 'twid'];
      
      // Filter and validate required cookies
      const filteredCookies = cookies.filter(item => 
        requiredCookies.includes(item.name) && 
        item.value && 
        item.value.length > 0
      );

      if (filteredCookies.length !== requiredCookies.length) {
        throw new Error('Missing required cookies');
      }

      return filteredCookies.map(cookie => cookie.value);
    } catch (error) {
      console.error('Error getting cookies:', error);
      return [];
    }
  }

  function getHeaders(e: WebRequest.OnBeforeSendHeadersDetailsType): void {
    try {
      const headers = e.requestHeaders;
      if (!headers) return;
      
      const bearerHeader = headers.find((h) => h.name.toLowerCase() === 'authorization');
      
      if (bearerHeader?.value && bearerHeader.value.startsWith('Bearer ')) {
        bearer_token = bearerHeader.value.split(' ')[1];
      }
    } catch (error) {
      console.error('Error processing headers:', error);
    }
  }

  browser.webRequest.onBeforeSendHeaders.addListener(
    getHeaders,
    {urls: [`*://${domain}/*`]},
    ["requestHeaders"],
  );

  browser.runtime.onMessage.addListener((request, sender, respond) => {
    if (request.action === 'getCookies') {
      getCookies().then(key => {
        if (key.length) {
          respond({ success: true, key: key });
        } else {
          respond({ success: false, error: 'Failed to get cookies' });
        }
      }).catch(err => respond({ success: false, error: err.message }));
      return true;
    }
  }); 

  async function deleteTweets(
    tab: Tab, 
    bearer: string, 
    cookies: string[], 
    dateRange: DateRange, 
    inputs: UserInputs
  ): Promise<void> {
    try {
      // Validate tab URL
      if (!tab.url.startsWith(`https://${domain}`)) {
        throw new Error('Invalid tab domain');
      }

      // Validate inputs
      if (!bearer || !cookies.length || !dateRange.start || !dateRange.end) {
        throw new Error('Missing required parameters');
      }

      await browser.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['./content-scripts/content.js'],
      });

      await browser.tabs.sendMessage(tab.id, {
        action: "deleteTweets",
        bearer,
        cookies,
        dateRange,
        inputs
      });    
    } catch (error) {
      console.error('Error in deleteTweets:', error);
    }
  }

  function sendToContentScript(request: any, cookies: string[]): void {
    try {
      if (request.action === "deleteTweets") {
        const { tab, dateRange, inputs } = request.data;
        deleteTweets(tab, bearer_token, cookies, dateRange, inputs);
      }
    } catch (error) {
      console.error('Error in sendToContentScript:', error);
    }
  }

  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    getCookies().then(key => sendToContentScript(request, key));
  });
});