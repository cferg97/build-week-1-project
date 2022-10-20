
const input = document.querySelector("input");

let starsContainer = document.getElementById("stars");

for (let i = 0; i < 10; i++) {
  let starImg = document.createElement("img");
  starImg.src = "./assets/star-black.svg";
  starImg.className = "star-style";
  starsContainer.appendChild(starImg);

  starImg.addEventListener("mouseover", () => onStarHover(i));
  starImg.addEventListener("mouseleave", onStarOut);
  starImg.addEventListener("click", () => onStarClick(i));
}

let stars = document.querySelectorAll(".star-style");
let active = -1;

function onStarHover(i) {
  fill(i);
}

function fill(ratingValue) {
  for (let i = 0; i < 10; i++) {
    if (i <= ratingValue) {
      stars[i].src = "./assets/star.svg";
    } else {
      stars[i].src = "./assets/star-black.svg";
    }
  }
}

function onStarOut() {
  fill(active);
}

function onStarClick(i) {
  active = i;
  // document.getElementById("display-star-value").innerHTML = i + 1;
  fill(active);
}

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    window.location.reload();
  }
});
