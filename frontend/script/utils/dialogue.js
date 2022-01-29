const displayError = (info) => {
  const element = document.createElement("p");
  element.className = "error";
  element.innerHTML = info;
  document.getElementById("dialogue").appendChild(element);
  console.error(info);
  setTimeout(() => {
    element.remove();
  }, 8000);
};

const displayWarning = (info) => {
  const element = document.createElement("p");
  element.className = "warning";
  element.innerHTML = info;
  document.getElementById("dialogue").appendChild(element);
  console.warn(info);
  setTimeout(() => {
    element.remove();
  }, 8000);
};

module.exports = {
  displayError,
  displayWarning,
};
