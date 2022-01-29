const backend = require("../../backend/dist/index.node");
const translation = require("./utils/translation.js");
const { ipcRenderer } = require("electron");

window.addEventListener("DOMContentLoaded", () => {
  loadStatus();
  translation.loadTranslation();
  setupOnclick();
});

const loadStatus = () => {
  statusText("mojang-account-status", backend.mojangAccountStatus);
  statusText("mojang-session-status", backend.mojangSessionStatus);
  statusText("mojang-texture-status", backend.mojangTextureStatus);
};

const setupOnclick = () => {
  document.getElementById("settings").onclick = () => {
    ipcRenderer.sendSync(
      "window-create",
      "./html/setting.html",
    );
  };
};

const statusText = (id, status) => {
  const element = document.getElementById(id);
  element.id = status() === "" ? "operational" : "broken";
};
