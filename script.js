const themeSwitch = document.getElementsByClassName("theme-switch")[0];
const circle = document.getElementsByClassName("circle")[0];

const body = document.querySelector("body");
const output = document.getElementsByClassName("output")[0];
const deleteButton = document.getElementsByClassName("delete")[0];
const reset = document.getElementsByClassName("reset")[0];
const equals = document.getElementsByClassName("equals")[0];

let position = "left";

circle.addEventListener("click", function () {
  if (position === "left") {
    themeSwitch.style.justifyContent = "center";

    body.classList.add("theme-two");

    position = "middle";
  } else if (position === "middle") {
    themeSwitch.style.justifyContent = "flex-end";

    body.classList.remove("theme-two");
    body.classList.add("theme-three");

    position = "right";
  } else {
    themeSwitch.style.justifyContent = "flex-start";

    body.classList.remove("theme-three");

    position = "left";
  }
});
