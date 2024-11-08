// COLOR DETERMINING ELEMENT UTIL

const getColorDeterminingElement = (elementJSPathString) => {
  const pageIds = [
    "O0106132807",
    "F3645062839",
    "V2310587329",
    "H4280264991",
    "X0385859603",
    "S4102939361",
    "L3218446703",
    "X3259902604",
    "F3607908150",
  ];
  for (id of pageIds) {
    const potentialElement = document.querySelector(
      `#${id} ${elementJSPathString}`
    );
    if (potentialElement) {
      return potentialElement;
    }
  }
  return false;
};
