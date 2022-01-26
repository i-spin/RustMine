const fs = require("fs");

window.addEventListener("DOMContentLoaded", () => {
  const translations = new Map(Object.entries(
    JSON.parse(
      fs.readFileSync("./frontend/translation/en_US.json", "utf8"),
    ),
  ));
  const elements = Array.from(document.querySelectorAll("[id]"));
  elements.forEach((element) => {
    if (translations.get(element.id) !== undefined) {
      element.innerHTML = translations.get(element.id);
    }
  });
});
