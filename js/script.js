const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex , correctAnswers = 0;

startButton.addEventListener('click', startGame);
answerButtonsElement.addEventListener('click', event=> {
    //if btn is selected it will call select answer then will determine if the users input is correct
    if(event.target.classlist.contains('btn')) {
        selectAnswer(event.target.dataset.correct);
    }
});

function startGame() {
    console.log('you clicked the button');
    startButton.classList.add('hide');
    //shuffling questions
    shuffledQuestions = shuffled(shuffledQuestions);
    //stopping questions from repeating
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetQuestion()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}


function selectAnswer(response) {
    const question = shuffledQuestion[currentQuestionIndex]
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
    



function showQuestion(question) {
    console.log()
    questionElement.innerText = question.question;
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.classList.add('btn');
        if(choice === question.choices[question.answer]) {
            button.dataset.correct = true
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


