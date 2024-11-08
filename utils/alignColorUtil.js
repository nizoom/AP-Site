//COLOR ALIGN UTL
const alignColors = (
  elementsArray,
  referenceElement,
  styleNeeded,
  cssProperty
) => {
  console.log("setting colors");
  const cssValue = window
    .getComputedStyle(referenceElement, null)
    .getPropertyValue(styleNeeded);

  // update session storage

  elementsArray.forEach((element) => {
    element.style[cssProperty] = cssValue;
    // extra step needed to change the "ANDIYAH" part of the element because its a seperate <a> element
    if (cssProperty === "color") {
      // aPNameElement
      const aElement = element.querySelector("a");
      aElement.style.color = cssValue;
    }
  });
};
