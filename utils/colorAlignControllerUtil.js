//COLOR ALIGN CONTROLLER

const colorAlignController = () => {
  const currentPath = location.pathname;
  // getting current color determining elements
  const mainPageElJsString = "> div > div";
  const captionElJsString =
    "> div > div > bodycopy > column-set > column-unit > gallery-justify > media-item:nth-child(1) > figcaption > span";
  setTimeout(() => {
    const currentMainPageEl = getColorDeterminingElement(mainPageElJsString);
    const currentCaptionElement = getColorDeterminingElement(captionElJsString);
    const [headerSectionElement, aPNameElement, bannerElement] =
      getConstantEls();
    // if currentMain page exists then assign current background color to header background color
    if (
      confirmElmntsExist([headerSectionElement, aPNameElement, bannerElement])
    ) {
      // console.log("confirmed");
      alignColors(
        [headerSectionElement, bannerElement],
        currentMainPageEl,
        "background-color",
        "backgroundColor"
      );
    } else {
      console.log("an element does not exist");
    }
    // if currentcaptionEl and apName Exists then assign caption color as name color
    if (currentCaptionElement && aPNameElement) {
      alignColors([aPNameElement], currentCaptionElement, "color", "color");
    }
    if (pathname === "/information") {
      console.log(pathname);
      console.log("headerSectionElement ", headerSectionElement);
      console.log("bannerElement ", bannerElement);
      alignColors(
        [bannerElement],
        currentMainPageEl,
        "background-color",
        "backgroundColor"
      );
    } else {
      console.log("Name process elements main and header");
      console.log(currentCaptionElement);
      console.log(aPNameElement);
    }
    return false;
  }, 100);
};
