export default defineContentScript({
  matches: ['*://x.com/*'],
  
  main() {
    // const search_input = document.querySelector('[aria-label="Search query"]') as HTMLInputElement;
    console.log("injection script working!");

    
    // Listen for messages from background script
    browser.runtime.onMessage.addListener((message) => {
      if (message.action === "insertString") {
        const { dateRange } = message;
        const searchInput = document.querySelector('[aria-label="Search query"]') as HTMLInputElement;
        
        if (searchInput) {
          // Format the search query with date range
          const searchQuery = `since:${dateRange.start} until:${dateRange.end}`;
          searchInput.value = searchQuery;

          // Find and submit the form
          const form = searchInput.closest('form');
          if (form) {
            form.submit();
          }
          
          searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    });
  },
});

// export default defineContentScript({
//   matches: ['*://x.com/*'],
  
//   main() {
//     console.log("script");


//     // Listen for messages from the background script
//     browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
//       console.log("script");
//       if (message.action === "filterAndDelete") {
//         const { startDate, endDate } = message.dateRange;
        
//         // Find all tweets on the page
//         const tweets = document.querySelectorAll('article[data-testid="tweet"]');
        
//         tweets.forEach(tweet => {
//           // Get the timestamp element (you'll need to adjust this selector)
//           const timeElement = tweet.querySelector('time');
//           if (timeElement) {
//             const tweetDate = new Date(timeElement.getAttribute('datetime') || '');
//             const start = new Date(startDate);
//             const end = new Date(endDate);
            
//             // Check if tweet is within date range
//             if (tweetDate >= start && tweetDate <= end) {
//               // Find and click the delete button
//               const deleteButton = tweet.querySelector('[data-testid="delete"]');
//               if (deleteButton) {
//                 (deleteButton as HTMLElement).click();
//                 // Wait for confirmation dialog and click confirm
//                 setTimeout(() => {
//                   const confirmButton = document.querySelector('[data-testid="confirmationSheetConfirm"]');
//                   if (confirmButton) {
//                     (confirmButton as HTMLElement).click();
//                   }
//                 }, 1000);
//               }
//             }
//           }
//         });
//       }
//     });
//   }
// });