//BROWSER NAV UTIL

// page refresh functionality
if (
  performance.navigation &&
  performance.navigation.type === performance.navigation.TYPE_RELOAD
) {
  console.log("Page was reloaded");
  setTimeout(() => {
    colorAlignController();
  }, 100);
}
// Backward and forward btn functionality
window.addEventListener("popstate", function () {
  console.log("Browser navigation (back or forward) detected");
  setTimeout(() => {
    pathCompareAndColorTrigger();
  }, 100);
});

// keep this

setTimeout(() => {
  colorAlignController();
}, 100);
