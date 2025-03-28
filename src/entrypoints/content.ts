export default defineContentScript({
  matches: ['*://x.com/*'],
  
  main() {    
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