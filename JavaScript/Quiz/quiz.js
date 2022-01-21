const container = document.querySelector(".container");
const quizContainer = document.createElement("div");
container.appendChild(quizContainer);
quizContainer.classList.add("quiz-container");
quizContainer.classList.add("hide");
let currentQuestionIndex, quizQuestion, answerList, pageCounter;
let totalCorrect = 0;

//comment

//create six quiz pages with a question and answers
let quizPages = [
  {
    question: "What is 49 - 32?",
    answers: [13, 17, -17, 16, 697],
    correct: 17,
    correctIndex: 1,
  },
  {
    question: "What is 70 - 14?",
    answers: [18, 79, 56, 32, 34],
    correct: 56,
    correctIndex: 2,
  },
  {
    question: "What is 80 - 15?",
    answers: [74, 65, 93, 40, 975],
    correct: 65,
    correctIndex: 1,
  },
  {
    question: "What is 10 - 20?",
    answers: [-350, -15, -10, -34, 34],
    correct: -10,
    correctIndex: 2,
  },
  {
    question: "What is 56 + 11?",
    answers: [102, 37, 44, 67, 50],
    correct: 67,
    correctIndex: 3,
  },
  {
    question: "What is 21 - 16?",
    answers: [170, 18, 5, 2, 26],
    correct: 5,
    correctIndex: 2,
  },
];

//add start button
const startButton = document.createElement("div");
container.appendChild(startButton);
startButton.classList.add("start-button");
startButton.innerText = "Start";

//starting the game
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  quizContainer.classList.remove("hide");
  buttonContainer.classList.remove("hide");
  currentQuestionIndex = 0;
  addQuizPage();
}

//add title and pagecounter
function addTitle() {
  const quizTitle = document.createElement("h1");
  quizTitle.innerText = "Math Problem";
  quizContainer.appendChild(quizTitle);
  pageCounter = document.createElement("h2");
  pageCounter.innerText = "1 / 6";
  quizContainer.appendChild(pageCounter);
  pageCounter.classList.add(".page-counter");
}
addTitle();

function addQuizPage() {
  //add elements for the quiz pages
  quizQuestion = document.createElement("div");
  answerList = document.createElement("ul");
  answerList.classList.add("answer-list");
  quizContainer.appendChild(quizQuestion);
  quizContainer.appendChild(answerList);
  quizQuestion.classList.add("quiz-question");
  //add the questions
  quizQuestion.innerText = quizPages[currentQuestionIndex].question;
  // create a loop to add all the answer elements
  for (let answer of quizPages[currentQuestionIndex].answers) {
    quizAnswers = document.createElement("li");
    answerList.appendChild(quizAnswers);
    quizAnswers.classList.add("quiz-answer");
    quizAnswers.innerText = answer;
    quizAnswers.addEventListener("click", selectAnswer);
  }
}

//select an answer and determine if it's correct or wrong
function selectAnswer(e) {
  const selectedAnswer = e.target;
  console.log(selectedAnswer);
  const correctAnswer = quizPages[currentQuestionIndex].correct;
  if (selectedAnswer.innerText == correctAnswer) {
    console.log("correct");
    totalCorrect++;
    alert("correct");
    // selectedAnswer.classList.add("correct");
  } else {
    console.log("wrong");
    alert("wrong");
    // selectedAnswer.classList.add("wrong");
  }
}

// function clearStatus(element) {
//   selectedAnswer.classList.remove("correct");
//   selectedAnswer.classList.remove("wrong");
// }

//add prev and next buttons
const buttonContainer = document.createElement("div");
container.appendChild(buttonContainer);
buttonContainer.classList.add("button-container");
buttonContainer.classList.add("hide");
const prevButton = document.createElement("div");
buttonContainer.appendChild(prevButton);
prevButton.classList.add("prev-button");
prevButton.innerText = "Previous";
const nextButton = document.createElement("div");
buttonContainer.appendChild(nextButton);
nextButton.classList.add("next-button");
nextButton.innerText = "Next";

//go to prev/next page
nextButton.addEventListener("click", nextQuizPage);
prevButton.addEventListener("click", prevQuizPage);

//when i click next, show the next question and answers
function nextQuizPage() {
  // clearStatus();
  currentQuestionIndex++;
  console.log(currentQuestionIndex);
  if (currentQuestionIndex >= quizPages.length) {
    restartQuiz();
  }
  pageCounter.innerText = `${currentQuestionIndex + 1} / 6`;
  quizQuestion.innerText = quizPages[currentQuestionIndex].question;
  console.log(quizPages[currentQuestionIndex].answers);
  quizAnswers = document.querySelectorAll(".quiz-answer");
  for (let i = 0; i < quizAnswers.length; i++) {
    quizAnswers.forEach(function (answers, index) {
      quizAnswers[index].innerText =
        quizPages[currentQuestionIndex].answers[index];
    });
  }
}

//when i click prev, show the previous question and answers
function prevQuizPage() {
  if (currentQuestionIndex === 0) {
    return;
  }
  currentQuestionIndex--;
  pageCounter.innerText = `${currentQuestionIndex + 1} / 6`;
  quizQuestion.innerText = quizPages[currentQuestionIndex].question;
  quizAnswers = document.querySelectorAll(".quiz-answer");
  for (let i = 0; i < quizAnswers.length; i++) {
    quizAnswers.forEach(function (answers, index) {
      quizAnswers[index].innerText =
        quizPages[currentQuestionIndex].answers[index];
    });
  }
}
//when i click next on the last question the total score & restart button appears
//total score needs to be calculated
//restart needs to lead back to the start of the quiz
function restartQuiz() {
  if (currentQuestionIndex === quizPages.length) {
    console.log("final");
    quizContainer.classList.add("hide");
    buttonContainer.classList.add("hide");
    const totalScore = document.createElement("p");
    container.appendChild(totalScore);
    totalScore.innerText = `You got ${totalCorrect} out of 6 questions right!`;
    const restartButton = document.createElement("div");
    container.appendChild(restartButton);
    restartButton.classList.add("restart-button");
    restartButton.innerText = "Restart";

    restartButton.addEventListener("click", () => {
      restartButton.classList.add("hide");
      totalScore.classList.add("hide");
      startButton.classList.remove("hide");
      startButton.addEventListener("click", () => {
        resetQuiz();
        addTitle();
        startQuiz();
      });
    });
  }
}

function resetQuiz() {
  while (quizContainer.firstChild) {
    quizContainer.removeChild(quizContainer.firstChild);
  }
}

// class QuizPage {
//   constructor(question, answers) {
//     this.question = question;
//     this.answers = answers;
//   }
// }
// let quizPageOne = new QuizPage("What is 49 - 32?", [13, 17, -17, 16, 697]);
// console.log(quizPageOne);
// let quizPageTwo = new QuizPage("What is 70 - 14?", [18, 79, 56, 32, 34]);
// console.log(quizPageTwo);
// let quizPageThree = new QuizPage("What is 80 - 15?", [74, 65, 93, 40, 975]);
// console.log(quizPageThree);
// let quizPageFour = new QuizPage("What is 10 - 20?", [-350, -15, -10, -34, 34]);
// console.log(quizPageFour);
// let quizPageFive = new QuizPage("What is 56 + 11?", [102, 37, 44, 67, 50]);
// console.log(quizPageFive);
// let quizPageSix = new QuizPage("What is 21 - 16?", [170, 18, 5, 2, 26]);
// console.log(quizPageSix);

// const questionArray = [
//   quizPageOne,
//   quizPageTwo,
//   quizPageThree,
//   quizPageFour,
//   quizPageFive,
//   quizPageSix,
// ];
