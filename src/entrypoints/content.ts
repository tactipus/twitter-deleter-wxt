export default defineContentScript({
  matches: ['*://x.com/*'],
  
  main() {
    console.log('Hello content.');
    const search_input = document.querySelector('[aria-label="Search query"]');
    
    function GetAllElements(search_input) {
      search_input.value.innerHTML = "cat";
      return elements;
}
  },
});
