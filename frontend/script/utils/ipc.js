const { ipcRenderer } = require("electron");

function openWindowOnButton(id, file) {
  document.getElementById(id).onclick = () => {
    ipcRenderer.sendSync(
      "window-create",
      file,
    );
  };
}

module.exports = {
  openWindowOnButton,
};
