// Implementing all needed variables
const correctAnswers = 4;
const wrongAnswers = 2;
const allQuestions = 6;
const correctPercentage = document.getElementById("true_question");
const wrongPercentage = document.getElementById("false_question");
const numberOfCorrect = document.getElementById("quantity_true");
const numberOfWrong = document.getElementById("quantity_false");
const textResult = document.getElementById("percentage_circle");
let percForCorrect = 0;
let percForWrong = 0;

// Function to calculate percentage of answers
const resultCalculation = function () {
  percForCorrect = (100 * correctAnswers) / allQuestions;
  percForWrong = (100 * wrongAnswers) / allQuestions;

  // Make percentages precise
  const preciseCorrect = percForCorrect.toPrecision(3);
  const preciseWrong = percForWrong.toPrecision(3);

  correctPercentage.innerText = preciseCorrect + "%";
  wrongPercentage.innerText = preciseWrong + "%";

  numberOfCorrect.innerText = correctAnswers + "/6 questions";
  numberOfWrong.innerText = wrongAnswers + "/6 questions";

  if (parseInt(percForCorrect) >= 60) {
    textResult.innerText = "Passed!!!";
  } else {
    textResult.innerText = "Failed!!!";
  }
};

window.onload = function () {
  resultCalculation();
};
