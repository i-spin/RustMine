const backend = require("../../backend/dist/index.node");
const translation = require("./utils/translation.js");

window.addEventListener("DOMContentLoaded", () => {
  loadStatus();
  translation.loadTranslation();
});

const loadStatus = () => {
  statusText("mojang-account-status", backend.mojangAccountStatus);
  statusText("mojang-session-status", backend.mojangSessionStatus);
  statusText("mojang-texture-status", backend.mojangTextureStatus);
};

const statusText = (id, status) => {
  const element = document.getElementById(id);
  element.id = status() === "" ? "operational" : "broken";
};
