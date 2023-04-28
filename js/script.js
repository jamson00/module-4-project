const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex , correctAnswers = 0;

startButton.addEventListener('click', startGame);
//answerButtonsElement.addEventListener('click', event=> {
    //if btn is selected it will call select answer then will determine if the users input is correct
   // if(event.target.classList.contains('btn')) {
      //  selectAnswer(event.target.dataset.correct);
 //   }
//});

function startGame() {
    console.log('you clicked the button');
    startButton.classList.add('hide');
    //shuffling questions
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    //stopping questions from repeating
    currentQuestionIndex = 0; 
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}


function setNextQuestion() {
    resetQuestion();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}






function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
};

function resetQuestion() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answer)
    }
}
function selectAnswer(response) {
    const question = shuffledQuestions[currentQuestionIndex]
    //checking if user response is the correct answer
    if(response == question.answer) {
        correctAnswers++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
        } else {
            endGame();
        }
    
    }

const questions = [
    {
        question: 'what is an array?',
        answers: [
            {text: 'array', correct: true}, 
            {text: '4', correct: false},
            {text: 'idk', correct: false},
            {text: 'sure', correct: false},
        ],

        question: 'what is an scope?',
        answers: [
            {text: 'array', correct: true}, 
            {text: '4', correct: false},
            {text: 'idk', correct: false},
            {text: 'sure', correct: false},
        ],


        question: 'what is agile?',
        answers: [
            {text: 'array', correct: true}, 
            {text: '4', correct: false},
            {text: 'idk', correct: false},
            {text: 'sure', correct: false},
        ],


        question: 'what is 2+2?',
        answers: [
            {text: 'array', correct: false}, 
            {text: '4', correct: true},
            {text: 'idk', correct: false},
            {text: 'sure', correct: false},
        ],


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