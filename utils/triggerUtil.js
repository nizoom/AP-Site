//MAIN TRIGGER UTIL

console.log("script tag is running ");
let pathname = location.pathname; // Initial pathname assignment

const pathCompareAndColorTrigger = () => {
  const currentPath = location.pathname; // Get the current path on each click

  if (currentPath !== pathname) {
    // Check if the current path is different from the stored path
    console.log("pathname changed to " + currentPath);
    pathname = currentPath; // Update the stored path to the new one

    // Your custom code to run on path change
    setTimeout(() => {
      colorAlignController();
    }, 100);
  }
};

window.addEventListener("click", function () {
  pathCompareAndColorTrigger();
});
