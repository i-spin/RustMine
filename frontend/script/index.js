const backend = require("../../backend/dist/index.node");
const translation = require("./utils/translation.js");

window.addEventListener("DOMContentLoaded", () => {
  translation.loadTranslation();
  loadStatus();
});

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
