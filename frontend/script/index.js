const backend = require("../../backend/dist/index.node");
const { loadTranslation } = require("./utils/translation.js");
const { openWindowOnButton } = require("./utils/ipc.js");

window.addEventListener("DOMContentLoaded", () => {
  loadStatus();
  loadTranslation();
  setupOnclick();
});

const loadStatus = () => {
  statusText("mojang-account-status", backend.mojangAccountStatus);
  statusText("mojang-session-status", backend.mojangSessionStatus);
  statusText("mojang-texture-status", backend.mojangTextureStatus);
};

const setupOnclick = () => {
  openWindowOnButton("settings", ["./html/settings.html", "settings.js"]);
};

const statusText = (id, status) => {
  const element = document.getElementById(id);
  element.id = status() === "" ? "operational" : "broken";
};
