const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

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
  window.loadFile(path.join(__dirname, "index.html"));

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

ipcMain.on("window-create", (event, arg) => {
  const window = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      // preload: path.join(__dirname, "script", "index.js"),
    },
  });
  window.loadFile(path.join(__dirname, arg));
  event.returnValue = "success";
});
