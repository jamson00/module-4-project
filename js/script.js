const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)
answerButtonsElement.addEventListener('click', selectAnswer)
let shuffledQuestions, currentQuestionIndexes

function startGame() {
    console.log('you clicked the button');
    startButton.classList.add('hide');
    //shuffling questions
    shuffledQuestions = shuffledQuestions.sort(() => Math.random() - .5);
    //stopping questions from repeating
    currentQuestionIndexes = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    shuffled(shuffledQuestions);
}



function selectAnswer() {
    for (let i = 0; i < shuffledQuestion.length; i++) { 
        let shuffledQuestion = shuffledQuestion[i][0]; 
        let answer = shuffledQuestion[i][1]; 
      
        if (response === answer) {
          correctAnswers++
          console.log(correctAnswers);
        }
      }
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndexes])
}

function showQuestion(question) {
    console.log()
    questionElement.innerText = question.question
    question.answer.array.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer
        button.classList.add('btn')
        if(answer === question.answer) {
            button.dataset.correct = answer.correct
        }
    });
}

const shuffledQuestion = [
    {
        question: 'what is an array?',
        choices: ['collection of similar data elements stored at contiguous memory locations','a fish', 'a penguin', 'a squid',],
        answer: 0
    },  

    {
        question: 'what is 2+2?',
        choices: ['4', 'a fish', 'a penguin', 'a squid'],
        answer: 0
    },

    {
        question: 'what is an 3+3?',
        choices: ['6', 'a fish', 'a penguin', 'a squid'],
        answer: 0
    },
]

let timeLeft = 60;
const timerElement = document.getElementById('timer-container')

const countdownTimer = setInterval(() => {
    if (timeLeft > 0) {
    timeLeft--;
    timerElement.innerText =timeLeft;
} else {
    clearInterval(countdownTimer);
}
}, 1000);

function shuffled(shuffledQuestion) {
    for (let i = shuffledQuestion.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledQuestion[i], shuffledQuestion[j]] = [shuffledQuestion[j], shuffledQuestion[i]];
    }
    return shuffledQuestion;
}