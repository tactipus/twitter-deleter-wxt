export default defineContentScript({
  matches: ['*://x.com/*'],
  
  main() {
    const search_input = document.querySelector('[aria-label="Search query"]');
    
    function insertWords(search_input) {
      search_input.value.innerHTML = "cat";
}
  },
});
