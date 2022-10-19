const paths = document.querySelectorAll("path");
const stars = document.querySelectorAll("svg");
const blueSvg = document.querySelectorAll(".blue-svg");
const input = document.querySelector("input");

const starColor = function () {
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", () => {
      for (let i = 0; i < paths.length; i++) {}
      paths[i].classList.toggle("starColor");
    });
  }
};

starColor();

const colorOff = function () {
  for (let i = 0; i < blueSvg.length; i++) {
    blueSvg[i].addEventListener("click", () => {
      for (let i = 0; i < paths.length; i++) {}
      paths[i].classList.toggle("colorOff");
    });
  }
};
colorOff();

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    window.location.reload();
  }
});
