const fs = require("fs");
const backend = require("../backend/dist/index.node");

const translations = new Map(Object.entries(
  JSON.parse(
    fs.readFileSync("./frontend/translation/en_US.json", "utf8"),
  ),
));

window.addEventListener("DOMContentLoaded", () => {
  loadTranslation();
  loadStatus();
  displayError("BRUH");
  displayError("BRUH");
});

const loadTranslation = () => {
  const elements = Array.from(document.querySelectorAll("[id]"));
  elements.forEach((element) => {
    if (translations.get(element.id) !== undefined) {
      element.innerHTML = translations.get(element.id);
    }
  });
};

const loadStatus = () => {
  document.getElementById("mojang-account-status").innerText =
    backend.mojangAccountStatus() === ""
      ? translations.get("operational")
      : translations.get("broken");

  document.getElementById("mojang-session-status").innerText =
    backend.mojangSessionStatus() === ""
      ? translations.get("operational")
      : translations.get("broken");

  document.getElementById("mojang-texture-status").innerText =
    backend.mojangTextureStatus() === ""
      ? translations.get("operational")
      : translations.get("broken");
};

const displayError = (info) => {
  // create child element
  const element = document.createElement("p");
  element.className = "error";
  element.innerHTML = `<b>Error!</b><br><br>${info}`;
  document.getElementById("dialogue").appendChild(element);
};
