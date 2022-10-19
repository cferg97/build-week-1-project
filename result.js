// Implementing all needed variables
<<<<<<< Updated upstream
const correctAnswers = 4;
const wrongAnswers = 2;
=======
const correctAnswers = 2;
const wrongAnswers = 4;
>>>>>>> Stashed changes
const allQuestions = 6;
const correctPercentage = document.getElementById("true_question");
const wrongPercentage = document.getElementById("false_question");
const numberOfCorrect = document.getElementById("quantity_true");
const numberOfWrong = document.getElementById("quantity_false");
const textResult = document.getElementById("text_result");
let percForCorrect = 0;
let percForWrong = 0;
let progressBar = document.querySelector(".container");

// Function to calculate percentage of answers
const resultCalculation = function () {
  percForCorrect = (100 * correctAnswers) / allQuestions;
  percForWrong = (100 * wrongAnswers) / allQuestions;

  // Make percentages precise
  const preciseCorrect = percForCorrect.toPrecision(3);
  const preciseWrong = percForWrong.toPrecision(3);

  let progressValue = 0;
  let progressEndValue = parseInt(percForWrong);
  let speed = 5;

  let progress = setInterval(() => {
    progressValue++;
    progressBar.style.background = `conic-gradient(
      purple ${progressValue * 3.6}deg,
      aqua ${progressValue * 3.6}deg
)`;
    if (progressValue === progressEndValue) {
      clearInterval(progress);
    }
  });

  correctPercentage.innerText = preciseCorrect + "%";
  wrongPercentage.innerText = preciseWrong + "%";

  numberOfCorrect.innerText = correctAnswers + "/6 questions";
  numberOfWrong.innerText = wrongAnswers + "/6 questions";

  if (parseInt(percForCorrect) >= 60) {
<<<<<<< Updated upstream
    textResult.innerText = "Passed!!!";
  } else {
    textResult.innerText = "Failed!!!";
=======
    textResult.innerHTML = `<div id="text_result">
    Congratulations!
    <br />
    <span id="different_color">You passed the exam.</span>
    <br />
    <span class="lower_text"
      >We'll send you the certificate <br />
      in few minutes.</span
    >
    <span class="lower_text"
      >Check your email (including <br />
      promotions / spam folder)</span
    >
  </div>`;
  } else {
    textResult.innerHTML = `<div id="text_result">Oh no, you failed this one</div>`;
>>>>>>> Stashed changes
  }
};

window.onload = function () {
  resultCalculation();
};
