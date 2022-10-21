// Implementing all needed variables
const answers = localStorage.getItem("score");
console.log(answers);
const correctAnswer = parseInt(answers);
const wrongAnswer = 10 - parseInt(answers);
const allQuestions = 10;
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
  percForCorrect = (100 * correctAnswer) / allQuestions;
  percForWrong = (100 * wrongAnswer) / allQuestions;

  // Make percentages precise
  const preciseCorrect = percForCorrect.toPrecision(3);
  const preciseWrong = percForWrong.toPrecision(3);

  let progressValue = 0;
  let progressEndValue = parseInt(percForWrong);
  let speed = 5;

  //Part of code which fulfiling progress bar
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

  //Getting precise percentage of correct and wrong answers
  numberOfCorrect.innerText = correctAnswer + "/10 questions";
  numberOfWrong.innerText = wrongAnswer + "/10 questions";

  if (parseInt(percForCorrect) >= 60) {
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
  }
};

window.onload = function () {
  resultCalculation();
};
