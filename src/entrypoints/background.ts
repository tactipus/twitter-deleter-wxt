export default defineBackground(() => {
  browser.runtime.onInstalled.addListener(() => {
    console.log('X Auth Helper installed!');
  });
  
  /**
  * The domain whose cookies are to be fetched.
  */
  const domain = 'x.com';

  /**
  * Gets cookies for x.com and encoding them to base64.
  */
  async function getCookies() {
    // Getting the cookies for the given domain
    let cookies = await browser.cookies.getAll({ domain: domain });
        
    // Filter out required cookies
    cookies = cookies.filter(item => item.name == 'auth_token' || item.name == 'ct0' || item.name == 'kdt' || item.name == 'twid');

    /** Stores the key */
    let key: string[] = [];

    // If all required cookies are present
    if (cookies.length == 4) {
      // Appending all cookies to a cookie string
      for (const {name, value} of cookies) {
        key.push(value);
      }

      // Encoding the cookies to base64 to get key
      // key = btoa(key);
    }
	    return key;

  }

  //get http request headers
  // function getHeaders(e) {
  //   const bearer = "";
  //   const headers = e.requestHeaders;
  //   if (headers["domain"] == domain) {
  //       bearer = headers["bearer"];
        
  //   }
  //   e.requestHeaders.forEach((header) =>{
  //   console.log(header);
  //  });
  // }

  // browser.webRequest.onBeforeSendHeaders.addListener(
  //   getHeaders,
  //   {urls: ["<all_urls>"]},
  //   ["requestHeaders"],
  // );


  // Listener for messages from popup
  // browser.runtime.onMessage.addListener((request, sender, respond) => {
  //   if (request.action === 'getCookies') {
  //     getCookies().then(key => {
  //       // If key generation was successful
  //       if (key.length) {
  //         respond({ success: true, key: key })
  //       }
  //       // If key generation failed
  //       else {
  //         throw new Error();
  //       }
  //     }).catch(err => respond({ success: false }));
        
  //     return true;
  //   }
  // }); 

  // function insertString(tab, range) {
  //   // browser.scripting.executeScript
  //   browser.scripting.executeScript({target: {tabId: tab.id}, files:['./content-scripts/content.js']});
  // }

  function insertString(tab, dateRange: { start: string, end: string }) {
    // First inject the content script
    browser.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['./content-scripts/content.js']
    }).then(() => {
      // After injection, send the dateRange to the content script
      browser.tabs.sendMessage(tab.id, {
        action: "insertString",
        dateRange: dateRange
      });    
    });
  }

  //same but experimental
  browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "insertString") {
      const { tab, dateRange } = request.data;
      // Now you have access to:
      // dateRange.start - start date
      // dateRange.end - end date
      insertString(tab, dateRange);
  }
      // if (request.action === 'insertString') {
      //   getCookies().then(key => {
      //     // If key generation was successful
      //     if (key.length) {
      //       respond({ success: true, key: key })
      //     }
      //     // If key generation failed
      //     else {
      //       throw new Error();
      //     }
      //   }).catch(err => respond({ success: false }));
          
      //   return true;
      // };
    }
  );

});