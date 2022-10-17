const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById("answer-container")
const timerContainerElement = document.getElementById("timer")
const timerText = document.getElementById("timer-text")
const timerCircle = document.getElementById("timer-circle")


let shuffledQuestions, currentQuestionIndex

document.addEventListener('visibilitychange', function (event) {
    if (document.hidden) {
        console.log('not visible');
    } else {
        console.log('is visible');
    }
})




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