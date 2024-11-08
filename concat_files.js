const fs = require("fs");
const path = require("path");

const files = [
  "./utils/triggerUtil.js",
  "./utils/getterUtil.js",
  "./utils/colorAlignControllerUtil.js",
  "./utils/getColorDeterminElsUtil.js",
  "./utils/alignColorUtil.js",
  "./utils/sessionStateUtil.js",
  "./utils/browserNavUtil.js",
];

let concatenatedCode = "";

files.forEach((file) => {
  const filePath = path.resolve(__dirname, file);
  const content = fs.readFileSync(filePath, "utf-8");
  concatenatedCode += content + "\n";
});

const finalScript = `<script>\n${concatenatedCode}\n</script>`;

fs.writeFileSync("./finalScript.html", finalScript);
console.log("Script concatenated into finalScript.html");
