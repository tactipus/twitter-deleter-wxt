export default defineBackground(() => {
  browser.runtime.onMessage.addListener()
});
