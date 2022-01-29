const fs = require("fs");
const path = require("path");
const backend = require("../../backend/dist/index.node");

const translations = new Map(Object.entries(
  JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "../translation/", "en_US.json"),
      "utf-8",
    ),
  ),
));

window.addEventListener("DOMContentLoaded", () => {
  loadTranslation();
  loadStatus();
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
  document.getElementById("mojang-account-status").innerText = statusText(
    backend.mojangAccountStatus(),
  );

  document.getElementById("mojang-session-status").innerText = statusText(
    backend.mojangSessionStatus(),
  );

  document.getElementById("mojang-texture-status").innerText = statusText(
    backend.mojangTextureStatus(),
  );
};

console.log(translations);

const displayError = (info) => {
  const element = document.createElement("p");
  element.className = "error";
  element.innerHTML = /*html*/ `<code>${info}</code>`;
  document.getElementById("dialogue").appendChild(element);
  console.error(info);
  setTimeout(() => {
    element.remove();
  }, 8000);
};

const statusText = (status) => {
  return status === ""
    ? translations.get("operational")
    : translations.get("broken");
};
