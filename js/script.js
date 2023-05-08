var questions = [
    {
      "question": "What does HTML stand for?",
      "answers": ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Markup Leveler"],
      "correctAnswer": "Hyper Text Markup Language"
    },
    {
      "question": "What is the purpose of CSS?",
      "answers": ["To style the structure of a web page", "To define the behavior of a web page", "To add interactivity to a web page", "To store data on a web page"],
      "correctAnswer": "To style the structure of a web page"
    },
    {
      "question": "What does JS stand for in JavaScript?",
      "answers": ["JavaScript", "Java Source", "JumpStart", "Just Saying"],
      "correctAnswer": "JavaScript"
    },
    {
      "question": "What is the syntax for a single-line comment in Python?",
      "answers": ["// Comment", "# Comment", "/* Comment */", "-- Comment"],
      "correctAnswer": "# Comment"
    },
    {
      "question": "What is the purpose of a variable in programming?",
      "answers": ["To store and manipulate data", "To display text on the screen", "To connect to a database", "To define a function"],
      "correctAnswer": "To store and manipulate data"
    },
    {
      "question": "Which data structure uses a Last-In-First-Out (LIFO) approach?",
      "answers": ["Queue", "Stack", "Tree", "Array"],
      "correctAnswer": "Stack"
    },
    {
      "question": "What is the result of 5 + '5' in JavaScript?",
      "answers": ["10", "'55'", "55", "Error"],
      "correctAnswer": "'55'"
    },
    {
      "question": "What does the 'for' loop do?",
      "answers": ["Executes a block of code repeatedly until a condition is met", "Declares a function", "Defines a class", "Performs arithmetic operations"],
      "correctAnswer": "Executes a block of code repeatedly until a condition is met"
    },
    {
      "question": "What does the acronym API stand for?",
      "answers": ["Application Programming Interface", "Automated Programming Interface", "Advanced Program Integration", "Automated Protocol Interface"],
      "correctAnswer": "Application Programming Interface"
    },
    {
      "question": "What is the file extension for a Cascading Style Sheet?",
      "answers": [".html", ".js", ".css", ".txt"],
      "correctAnswer": ".css"
    }
  ]

var answerIndex = 0;
var questionEl = document.getElementById("question-container");
var score = 0;

function showCurrentQuestion() {
    var currentQuestion = questions[answerIndex];

    var questionHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${currentQuestion.question}?</h5>
            <button class="btn btn-primary" onclick="showNextQuestion('${currentQuestion.answers[0]}')">${currentQuestion.answers[0]}</button>
            <button class="btn btn-primary" onclick="showNextQuestion('${currentQuestion.answers[1]}')">${currentQuestion.answers[1]}</button>
            <button class="btn btn-primary" onclick="showNextQuestion('${currentQuestion.answers[2]}')">${currentQuestion.answers[2]}</button>
            <button class="btn btn-primary" onclick="showNextQuestion('${currentQuestion.answers[3]}')">${currentQuestion.answers[3]}</button>
        </div>
        </div>
    `

    questionEl.innerHTML = questionHTML
}

function showNextQuestion(guess) {
    var currentQuestion = questions[answerIndex];

    if(guess === currentQuestion.correctAnswer){
        score += 10
    }else{
        score-=2;
        sec-=5;
    }

    answerIndex++;

    if (answerIndex < questions.length) {
        showCurrentQuestion();
    } else {
        endGame()
    }
}

function endGame() {
    questionEl.innerHTML = `<h2>Your score is ${score}</h2>`
}

showCurrentQuestion();

(function() {
  var sec = 60;
  function startTimer(){
      console.log('timer suppose to go')
      var timer = setInterval(function(){
          sec--;
          document.getElementById('timerDisplay').innerHTML='00:'+sec;
          if (sec < 0) {
              clearInterval(timer);
              alert("Time is up!")
          }
      }, 1000);
  }
  document.getElementById('incorrect').addEventListener('click', function() {
      document.getElementById('timerDisplay').innerHTML='00:'+sec;
  });
  startTimer();
})();