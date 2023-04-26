const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)
//answerButton.addEventListener('click', )
let shuffledQuestions, currentQuestionIndexes

function startGame() {
    console.log('you clicked the button');
    startButton.classList.add('hide');
    //shuffling questions
    shuffledQuestions = question.sort(() => Math.random() - .5);
    //stopping questions from repeating
    currentQuestionIndexes = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    shuffled(question);
}



function selectAnswer() {
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndexes])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}
const question = [
    {
        question: 'what is an array?',
        choices: ['collection of similar data elements stored at contiguous memory locations','a fish', 'a penguin', 'a squid',],
        answer: 0
    },  

    {
        question: 'what is 2+2?',
        answers: ['4', 'a fish', 'a penguin', 'a squid'],
        answer: 0
    },

    {
        question: 'what is an 3+3?',
        answers: ['6', 'a fish', 'a penguin', 'a squid'],
        answer: 0
    },
]