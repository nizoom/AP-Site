//GET CONSTANT ELEMENTS UTIL

const getConstantEls = () => {
  const headerSectionElement = document.querySelector(
    "#K0174265030 > div > div"
  );
  const aPNameElement = document.querySelector(
    "#K0174265030 > div > div > bodycopy > column-set > column-unit:nth-child(3) > div > h1 > span"
  );

  const bannerElement = document.querySelector("#O4186593732 > div > div");
  return [headerSectionElement, aPNameElement, bannerElement];
};

const confirmElmntsExist = (arrayOfElements) => {
  return arrayOfElements.every((element) => document.body.contains(element));
};
