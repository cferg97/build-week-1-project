const paths = document.querySelectorAll("path");
const stars = document.querySelectorAll(".svg");

const starColor = function () {
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", () => {
      for (let i = 0; i < paths.length; ++i) {}
      paths[i].setAttribute('style', 'fill: #00ffff')
    });
    
    
  }
};

starColor();
