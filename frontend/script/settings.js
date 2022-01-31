const fs = require("fs");
const path = require("path");
const { displayWarning } = require("./utils/dialogue.js");

document.addEventListener("DOMContentLoaded", function () {
  addThemes();
  addListener();
});

const addThemes = () => {
  const themeInUse = fs.readlinkSync(
    path.join(__dirname, "..", "style", "theme-in-use.css"),
  ).split("/").pop().replace(".css", "");

  const element = document.createElement("option");
  element.value = themeInUse;
  element.innerText = themeInUse;
  document.getElementById("themes").appendChild(element);

  fs.readdirSync(path.join(__dirname, "..", "style", "rose-pine"))
    .filter((file) => file.endsWith(".css") && file !== themeInUse + ".css")
    .map((file) => file.replace(".css", ""))
    .forEach((theme) => {
      const element = document.createElement("option");
      element.value = theme;
      element.innerText = theme;
      document.getElementById("themes").appendChild(element);
    });
};

const addListener = () => {
  changeTheme();
};

const changeTheme = () => {
  document.getElementById("themes").addEventListener("change", () => {
    try {
      fs.unlinkSync(path.join(__dirname, "..", "style", "theme-in-use.css"));
    } catch (e) {}
    fs.symlinkSync(
      path.join(
        __dirname,
        "..",
        "style",
        "rose-pine",
        `${document.getElementById("themes").value}.css`,
      ),
      path.join(__dirname, "..", "style", "theme-in-use.css"),
    );
    displayWarning("Theme changed. Restart the application to apply.");
  });
};
