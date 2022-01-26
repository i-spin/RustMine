const path = require("path");
const { app, BrowserWindow } = require("electron");
require("electron-reloader")(module);
const fs = require("fs");

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  window.loadFile("./frontend/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
