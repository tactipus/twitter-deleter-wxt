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
  console.log("hello 1");
  async function getCookies() {
    console.log("hello 2");
    // Getting the cookies for the given domain
    let cookies = await browser.cookies.getAll({ domain: domain });
        
    // Filter out required cookies
    cookies = cookies.filter(item => item.name == 'auth_token' || item.name == 'ct0' || item.name == 'kdt' || item.name == 'twid');

    /** Stores the key */
    let key = '';

  // If all required cookies are present
    if (cookies.length == 4) {
      console.log("hello 3");
      // Appending all cookies to a cookie string
      for (const {name, value} of cookies) {
        key += `${name}=${value};`;
      }

      // Encoding the cookies to base64 to get key
      key = btoa(key);
    }
 
    return key;
  }

  // Listener for messages from popup
  browser.runtime.onMessage.addListener((request, sender, respond) => {
    console.log("hello 4");
    if (request.action === 'getCookies') {
      getCookies().then(key => {
        // If key generation was successful
        if (key.length) {
          console.log("hello 5");
          respond({ success: true, key: key })
        }
        // If key generation failed
        else {
          console.log("hello 6");
          throw new Error();
        }
      }).catch(err => respond({ success: false }));
        
      return true;
    }
  }); 
});