const container = document.querySelector(".container");
const quizContainer = document.createElement("div");
container.appendChild(quizContainer);
quizContainer.classList.add("quiz-container");
quizContainer.classList.add("hide");
let currentQuestionIndex;

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
}

//add title and pagecounter
const quizTitle = document.createElement("h1");
quizTitle.innerText = "Math Problem";
quizContainer.appendChild(quizTitle);
console.log(quizTitle);
let pageCounter = document.createElement("h2");
pageCounter.innerText = "1/6";
quizContainer.appendChild(pageCounter);
console.log(pageCounter);

//add six quiz pages with a question and answers
let quizPages = [
  {
    question: "what is 49 - 32?",
    answers: [13, 17, -17, 16, 697],
  },
  {
    question: "what is 70 - 14?",
    answers: [18, 79, 56, 32, 34],
  },
  {
    question: "What is 80 - 15?",
    answers: [74, 65, 93, 40, 975],
  },
  {
    question: "What is 10 - 20?",
    answers: [-350, -15, -10, -34, 34],
  },
  {
    question: "What is 56 + 11?",
    answers: [102, 37, 44, 67, 50],
  },
  {
    question: "What is 21 - 16?",
    answers: [170, 18, 5, 2, 26],
  },
];
console.log(quizPages);

//add elements for the quiz pages
const quizQuestion = document.createElement("div");
const answerList = document.createElement("ul");
quizContainer.appendChild(quizQuestion);
quizContainer.appendChild(answerList);
quizQuestion.classList.add("quiz-question");

//fill out the elements with text
quizQuestion.innerText = quizPages[0].question;

// create a loop to add all the answer elements
for (let answer of quizPages[0].answers) {
  const quizAnswers = document.createElement("li");
  answerList.appendChild(quizAnswers);
  quizAnswers.classList.add("quiz-answer");

  const answerNumber = document.createElement("span");
  quizAnswers.appendChild(answerNumber);
  answerNumber.classList.add("answer-number");

  answerNumber.innerText = 1;
  quizAnswers.innerText = answer;
}

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

//go to next page
nextButton.addEventListener("click", nextQuizPage);
prevButton.addEventListener("click", prevQuizPage);

function nextQuizPage() {
  currentQuestionIndex++;
  console.log(currentQuestionIndex);
  console.log("next");
}
function prevQuizPage() {
  currentQuestionIndex--;
  console.log(currentQuestionIndex);
  console.log("prev");
}

//class QuizPage {
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
