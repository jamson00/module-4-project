const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const answerButton = document.getElementById('answer-buttons')
startButton.addEventListener('click', startGame)
answerButton.addEventListener('click', show)


function startGame() {
    console.log('you clicked the button')
    
    
    function shuffle(questions) {
        let shuffledQuestions = [];
        let questionIndexes = [];
        
        let i = 0
        while (i < questions.length) {
            let randomQuestions = math.floor(math.random() * questions.length)
            if(!questionIndexes.includes(randomQuestions)) {
                shuffledQuestions.push(questions[randomQuestions]);
                questionIndexes.push(randomQuestions);
                i++;
            }
        }
        console.log(shuffledQuestions)
        return shuffledQuestions
    }
    
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffle(questions);
    setNextQuestion()
}

function selectAnswer() {
    const random = math.floor(math.random() * questions.length);
    console.long(random, questions[random]);
}

function setNextQuestion() {
    showQustion(questions.random)
}

const questions = [
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