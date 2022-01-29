const path = require("path");
const { app, BrowserWindow } = require("electron");
const fs = require("fs");

const createWindow = () => {
  const splash = new BrowserWindow({
    width: 300,
    height: 300,
    transparent: false,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "script", "splash.js"),
    },
  });

  splash.loadFile(path.join(__dirname, "splash.html"));
  splash.center();

  const window = new BrowserWindow({
    width: 1200,
    height: 1000,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "script", "index.js"),
    },
  });
  window.loadFile("./frontend/index.html");

  setTimeout(() => {
    splash.close();
    window.show();
  }, 6000);
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
