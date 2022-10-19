const questionContainer = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-container")
const questionCounterElement = document.getElementById("q-num")
const nextBtn = document.getElementById("next-btn")
let shuffledQuestions, currentQuestionIndex
let correctAnswers = []
let wrongAnswers = []


nextBtn.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQ()
})

function start(){
  questionCounterElement.textContent = 0
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  setNextQ()
}

function setNextQ(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  const counter = parseInt(questionCounterElement.textContent, 0)
  questionCounterElement.textContent = counter + 1
}

function resetState(){
  timer()
  nextBtn.classList.add("hidden")
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function showQuestion(question){
  questionContainer.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    button.classList.add("answer-btn")
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (shuffledQuestions.length > currentQuestionIndex + 1){
      nextBtn.classList.remove("hidden")
    }
  else{
    nextBtn.classList.remove("hidden")
    nextBtn.innerText = "See Results"
    nextBtn.addEventListener("click", () => {
      window.location="result.html"
    })
  }
}

// function setStatusClass(element, correct){
//   clearStatusClass(element)
//   if (correct){
//       element.classList.add("correct")
//   }else{
//       element.classList.add("wrong") //changes style based on whether answer is correct or incorrect
//   }
// }


// function processResults(isCorrect){
//   if (!isCorrect){
//     return
//   }
// }

// //timer stuff below here idfk
// function timerStuff(){
//   const FULL_DASH_ARRAY = 283;
// const WARNING_THRESHOLD = 10;
// const ALERT_THRESHOLD = 5;

// const COLOR_CODES = {
//   info: {
//     color: "green"
//   },
//   warning: {
//     color: "orange",
//     threshold: WARNING_THRESHOLD
//   },
//   alert: {
//     color: "red",
//     threshold: ALERT_THRESHOLD
//   }
// };

// const TIME_LIMIT = 20;
// let timePassed = 0;
// let timeLeft = TIME_LIMIT;
// let timerInterval = null;
// let remainingPathColor = COLOR_CODES.info.color;

// document.getElementById("app").innerHTML = `
// <div class="base-timer">
//   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//     <g class="base-timer__circle">
//       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
//       <path
//         id="base-timer-path-remaining"
//         stroke-dasharray="283"
//         class="base-timer__path-remaining ${remainingPathColor}"
//         d="
//           M 50, 50
//           m -45, 0
//           a 45,45 0 1,0 90,0
//           a 45,45 0 1,0 -90,0
//         "
//       ></path>
//     </g>
//   </svg>
//   <span id="base-timer-label" class="base-timer__label">${formatTime(
//     timeLeft
//   )}</span>
// </div>
// `
// startTimer();

// function onTimesUp() {
//   clearInterval(timerInterval)
// }

// function startTimer() {
//   timerInterval = setInterval(() => {
//     timePassed = timePassed += 1;
//     timeLeft = TIME_LIMIT - timePassed;
//     document.getElementById("base-timer-label").innerHTML = formatTime(
//       timeLeft
//     );
//     setCircleDasharray();
//     setRemainingPathColor(timeLeft);

//     if (timeLeft === 0) {
//       onTimesUp()
//     }
//   }, 1000);
// }

// function formatTime(time) {
//   let seconds = time % 60;

//   if (seconds < 10) {
//     seconds = `0${seconds}`;
//   }

//   return `${seconds}` + " seconds remaining";
// }

// function setRemainingPathColor(timeLeft) {
//   const { alert, warning, info } = COLOR_CODES;
//   if (timeLeft <= alert.threshold) {
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.remove(warning.color);
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.add(alert.color);
//   } else if (timeLeft <= warning.threshold) {
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.remove(info.color);
//     document
//       .getElementById("base-timer-path-remaining")
//       .classList.add(warning.color);
//   }
// }

// function calculateTimeFraction() {
//   const rawTimeFraction = timeLeft / TIME_LIMIT;
//   return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
// }

// function setCircleDasharray() {
//   const circleDasharray = `${(
//     calculateTimeFraction() * FULL_DASH_ARRAY
//   ).toFixed(0)} 283`;
//   document
//     .getElementById("base-timer-path-remaining")
//     .setAttribute("stroke-dasharray", circleDasharray);
// }
// }


const questions = [ //array of questions and answers
    {
        question: "What does CPU stand for?",
        answers: [
            {text: "Central Processing Unit", correct: true},
            {text: "Central Process Unit", correct: false},
            {text: "Computer Personal Unit", correct: false},
            {text: "Central Processor Unit", correct: false}
        ]
    },
    {
        question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
        answers: [
            {text: "Static", correct: false},
            {text: "Public", correct: false},
            {text: "Final", correct: true},
            {text: "Private", correct: false}
        ]
    },
    {
        question: "The logo for Snapchat is a bell.",
        answers: [
            {text: "True", correct: true},
            {text: "False", correct: false}
        ]
    },
    {
        question: "how many possible answers does this question have?",
        answers: [
            {text: "One", correct: false},
            {text: "Two", correct: false},
            {text: "Three", correct: true}
        ]
    },
    {
        question: "On Twitter, what is the character limit for a tweet?",
        answers: [
            {text: "100", correct: false},
            {text: "140", correct: true},
            {text: "120", correct: false},
            {text: "160", correct: false}
        ]
    },
    {
        question: "In web design, what does CSS stand for?",
        answers: [
            {text: "Computer Style Sheet", correct: false},
            {text: "Corrective Style Sheet", correct: false},
            {text: "Counter Strike: Source", correct: false},
            {text: "Cascading Style Sheet", correct: true}
        ]
    },
    {
        question: "Linux was first created as an alternative to Windows XP",
        answers: [
            {text: "False", correct: true},
            {text: "True", correct: false}
        ]
    },
    {
        question: "What is the code name for the mobile operating system Android 7.0?",
        answers: [
            {text: "Ice Cream Sandwich", correct: false},
            {text: "Jelly Bean", correct: false},
            {text: "Nougat", correct: true},
            {text: "Marshmallow", correct: false}
        ]
    },
    {
        question: "Which programming language shares its name with an island in Indonesia?",
        answers: [
            {text: "Java", correct: true},
            {text: "Jakarta", correct: false},
            {text: "C", correct: false},
            {text: "Python", correct: false}
        ]
    },
    {
        question: "Which of the following is the correct syntax for adding an element via JavaScript?",
        answers: [
            {text: "createElement(div)", correct:false},
            {text: "document.createElement('div')", correct:true},
            {text: "document.createelement.div", correct:false},
            {text: "document.createElement = div", correct: false}
        ]
    }
]

