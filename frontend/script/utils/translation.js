const fs = require("fs");
const path = require("path");

const translations = new Map(Object.entries(
  JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../../translation/", "en_US.json"),
      "utf-8",
    ),
  ),
));

const loadTranslation = () => {
  const elements = Array.from(document.querySelectorAll("[id]"));
  elements.forEach((element) => {
    if (translations.get(element.id) !== undefined) {
      element.innerHTML = translations.get(element.id);
    }
  });
};

module.exports = {
  loadTranslation,
};
