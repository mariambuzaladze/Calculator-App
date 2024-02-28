const themeSwitch = document.getElementsByClassName("theme-switch")[0];
const circle = document.getElementsByClassName("circle")[0];

const body = document.querySelector("body");
const output = document.getElementsByClassName("output")[0];
const deleteButton = document.getElementsByClassName("delete")[0];
const reset = document.getElementsByClassName("reset")[0];
const equals = document.getElementsByClassName("equals")[0];
const numbers = document.getElementsByClassName("number");
const outputText = document.getElementsByClassName("output-text")[0];
const plus = document.getElementsByClassName("plus")[0];
const minus = document.getElementsByClassName("minus")[0];
const devision = document.getElementsByClassName("devision")[0];
const mulpitly = document.getElementsByClassName("multiply")[0];
const period = document.getElementsByClassName("period")[0];

// localStorage.setItem("position", "left");
function check() {
  let position = localStorage.getItem("position");
  if (position === "left") {
    themeSwitch.style.justifyContent = "flex-start";
  } else if (position === "middle") {
    themeSwitch.style.justifyContent = "center";

    body.classList.add("theme-two");
  } else {
    themeSwitch.style.justifyContent = "flex-end";

    body.classList.remove("theme-two");
    body.classList.add("theme-three");
  }
}

check();

circle.addEventListener("click", function () {
  let position = localStorage.getItem("position");
  if (position === "left") {
    themeSwitch.style.justifyContent = "center";

    body.classList.add("theme-two");

    localStorage.setItem("position", "middle");
  } else if (position === "middle") {
    themeSwitch.style.justifyContent = "flex-end";

    body.classList.remove("theme-two");
    body.classList.add("theme-three");

    localStorage.setItem("position", "right");
  } else {
    themeSwitch.style.justifyContent = "flex-start";

    body.classList.remove("theme-three");

    localStorage.setItem("position", "left");
  }
});

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    output.classList.add("active");
    outputText.textContent += numbers[i].textContent;
  });
}

deleteButton.addEventListener("click", function () {
  outputText.textContent = outputText.textContent.slice(0, -1);
});

reset.addEventListener("click", function () {
  outputText.textContent = "";
});

equals.addEventListener("click", function () {
  if (!outputText.textContent.includes("x")) {
    outputText.textContent = eval(outputText.textContent);
  } else {
    outputText.textContent = eval(outputText.textContent.replaceAll("x", "*"));
  }
});
