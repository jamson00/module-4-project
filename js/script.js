const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('you clicked the button')
}

function selectAnswer() {
}

const questions = [
    {
        question: 'what is an array',
        answers: [
            {text: 'collection of similar data elements stored at contiguous memory locations', correct: true},
            {text: 'a fish', incorrect: false},
            {text: 'a penguin', incorrect: false},
            {text: 'a squid', incorrect: false}
        ]
    },

    {
        question: 'what is 2+2',
        answers: [
            {text: '4', correct: true},
            {text: 'a fish', incorrect: false},
            {text: 'a penguin', incorrect: false},
            {text: 'a squid', incorrect: false}
        ]
    },

    {
        question: 'what is an 3+3',
        answers: [
            {text: '6', correct: true},
            {text: 'a fish', incorrect: false},
            {text: 'a penguin', incorrect: false},
            {text: 'a squid', incorrect: false}
        ]
    },

    {
        question: 'what is an 4+4',
        answers: [
            {text: '8', correct: true},
            {text: 'a fish', incorrect: false},
            {text: 'a penguin', incorrect: false},
            {text: 'a squid', incorrect: false}
        ]
    },

    {
        question: 'what is an 1+1',
        answers: [
            {text: '2', correct: true},
            {text: 'a fish', incorrect: false},
            {text: 'a penguin', incorrect: false},
            {text: 'a squid', incorrect: false}
        ]
    },
]