const questions = [
  //array of questions and answers
  {
    question: "What does CPU stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Central Process Unit", correct: false },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Processor Unit", correct: false },
    ],
  },
  {
    question: "Which of these is the correct way to declare a variable in JS?",
    answers: [
      { text: "'hello = let'", correct: false },
      { text: "let hello = let", correct: false },
      { text: "let hello = 'hello'", correct: true },
      { text: "hello var", correct: false },
    ],
  },
  {
    question: "The logo for Snapchat is a bell.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "how many possible answers does this question have?",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Three", correct: true },
    ],
  },
  {
    question: "On Twitter, what is the character limit for a tweet?",
    answers: [
      { text: "100", correct: false },
      { text: "140", correct: true },
      { text: "120", correct: false },
      { text: "160", correct: false },
    ],
  },
  {
    question: "In web design, what does CSS stand for?",
    answers: [
      { text: "Computer Style Sheet", correct: false },
      { text: "Corrective Style Sheet", correct: false },
      { text: "Counter Strike: Source", correct: false },
      { text: "Cascading Style Sheet", correct: true },
    ],
  },
  {
    question: "Linux was first created as an alternative to Windows XP",
    answers: [
      { text: "False", correct: true },
      { text: "True", correct: false },
    ],
  },
  {
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    answers: [
      { text: "Ice Cream Sandwich", correct: false },
      { text: "Jelly Bean", correct: false },
      { text: "Nougat", correct: true },
      { text: "Marshmallow", correct: false },
    ],
  },
  {
    question:
      "Which programming language shares its name with an island in Indonesia?",
    answers: [
      { text: "Java", correct: true },
      { text: "Jakarta", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
    ],
  },
  {
    question:
      "Which of the following is the correct syntax for adding an element via JavaScript?",
    answers: [
      { text: "createElement(div)", correct: false },
      { text: "document.createElement('div')", correct: true },
      { text: "document.createelement.div", correct: false },
      { text: "document.createElement = div", correct: false },
    ],
  },
]

const questionContainer = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-container")
const questionCounterElement = document.getElementById("q-num")
const nextBtn = document.getElementById("next-btn")
let shuffledQuestions, currentQuestionIndex //declare variables to be used for random questions but not yet assigned anything
let correctAnswers = []
let wrongAnswers = []
let score = 0

//declaring global variables above here

// const timeOut = setTimeout(timer(), 20000) //trying to set timeout for timer, didnt work

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQ()
}) //setting event listener for next button, increments question index by 1 and runs next question function

function start() {
  questionCounterElement.textContent = 0 //set question counter to zero on start
  shuffledQuestions = questions.sort(() => Math.random() - 0.5) //randomise questions
  currentQuestionIndex = 0 //set current index to 0
  setNextQ() //set next question
}

function setNextQ() {
  resetState() //run reset state function; //attempting to reset timer, doesn't work
  timer() //run timer function
  showQuestion(shuffledQuestions[currentQuestionIndex]) //show random question using showQuestion function
  const counter = parseInt(questionCounterElement.textContent, 0) //grab text from counter element
  questionCounterElement.textContent = counter + 1 //incrememnt by one each time new question is set
}

function resetState() {
  //reset state function
  nextBtn.classList.add("hidden") //hide next button
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild) //remove all existing question buttons
  }
}

function showQuestion(question) {
  //show question function
  questionContainer.innerText = question.question //changes question text to current question
  question.answers.forEach((answer) => {
    //for each answer in question
    const button = document.createElement("button") //create button
    button.innerText = answer.text //change each button text to each answer
    button.classList.add("answer-btn") //add button styling class
    if (answer.correct) {
      //if answer is correct
      button.dataset.correct = answer.correct //set dataset
    }
    button.addEventListener("click", selectAnswer) //add event listener on click, runs function select answer
    answerButtonsElement.appendChild(button) //appends buttons created to buttons container
  })
}

function selectAnswer(e) {
  //select answer on event function
  const selectedButton = e.target //target = current selected button
  const correct = selectedButton.dataset.correct //correct answer = current selected button's dataset
  processResults(correct) //runs process results function when answer selected is correct
  // console.log(correct)
  // if (correct == true) {
  //   return score = score + 1
  // } //failed attempt at incrementing score
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    //if there is still questions left, continue
    nextBtn.classList.remove("hidden")
  } else {
    //else (When there's no questions left)
    const timer = document.getElementById("app")
    timer.classList.add("hidden") //hide timer
    nextBtn.classList.remove("hidden") //remove hidden style of next button
    nextBtn.innerText = "See Results" //change text of next button to see results
    nextBtn.addEventListener("click", () => {
      window.location = "result.html"
    }) //add event listener on click, links to results page
    score = score.toString() //convert score to score
    console.log(score) //show on console log just to check
    localStorage.setItem("score", score) //save score to localStorage so can be accessed by result.js
  }
}

function processResults(isCorrect) {
  if (!isCorrect) {
    //if the answer is not correct, do nothing
    return
  }
  score++ //increment score by one on correct questions
  console.log(score)
}

// function setStatusClass(element, correct){ //pieces of code from previous quiz, irrelevant here
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
const TIME_LIMIT = 30
let timePassed = 0
let timerInterval = null
let timeLeft = TIME_LIMIT

function timer() {
  const FULL_DASH_ARRAY = 283
  const WARNING_THRESHOLD = 10
  const ALERT_THRESHOLD = 5

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  }

  let remainingPathColor = COLOR_CODES.info.color

  document.getElementById("app").innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
        <path
          id="base-timer-path-remaining"
          stroke-dasharray="283"
          class="base-timer__path-remaining ${remainingPathColor}"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">${formatTime(
      timeLeft
    )}</span>
  </div>
  `

  startTimer() //start timer

  function startTimer() {
    
    clearInterval(timerInterval)
    timePassed = 0
    timeLeft = TIME_LIMIT 
    setCircleDasharray()
    setRemainingPathColor(timeLeft)
    timerInterval = setInterval(() => {
      timePassed++

      timeLeft = TIME_LIMIT - timePassed
      document.getElementById("base-timer-label").innerHTML =
        formatTime(timeLeft)
      setCircleDasharray()
      setRemainingPathColor(timeLeft)

      if (timeLeft === 0) {
        onTimesUp()
        setNextQ()
      }
    }, 1000)
    console.log(`new timer: ${timerInterval}`)
  }

  function onTimesUp() {
    clearInterval(timerInterval)
  }

  function formatTime(time) {
    let seconds = time % 60

    if (seconds < 10) {
      seconds = `${seconds}`
    }

    return `${seconds}` + " seconds"
  }

  function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color)
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color)
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color)
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color)
    }
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction)
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray)
  }
}