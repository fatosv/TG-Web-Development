const container = document.querySelector(".quizContainer");
console.log(container);

//add title and pagecounter
const quizTitle = document.createElement("h1");
quizTitle.innerText = "Math Quiz";
container.appendChild(quizTitle);
console.log(quizTitle);
let pageCounter = document.createElement("h2");
pageCounter.innerText = "1/6";
container.appendChild(pageCounter);
console.log(pageCounter);

//six quiz pages with a question and answers
class QuizPage {
  constructor(question, answers) {
    this.question = question;
    this.answers = answers;
  }
}
let quizPageOne = new QuizPage("What is 49 - 32?", [13, 17, -17, 16, 697]);
console.log(quizPageOne);
let quizPageTwo = new QuizPage("What is 70 - 14?", [18, 79, 56, 32, 34]);
console.log(quizPageTwo);
let quizPageThree = new QuizPage("What is 80 - 15?", [74, 65, 93, 40, 975]);
console.log(quizPageThree);
let quizPageFour = new QuizPage("What is 10 - 20?", [-350, -15, -10, -34, 34]);
console.log(quizPageFour);
let quizPageFive = new QuizPage("What is 56 + 11?", [102, 37, 44, 67, 50]);
console.log(quizPageFive);
let quizPageSix = new QuizPage("What is 21 - 16?", [170, 18, 5, 2, 26]);
console.log(quizPageSix);

//add elements for the quiz pages

const quizQuestion = document.createElement("div");
const answerList = document.createElement("ul");

container.appendChild(quizQuestion);
container.appendChild(answerList);

quizQuestion.classList.add("quizQuestion");

//fill out the elements with text
quizQuestion.innerText = quizPageOne.question;

//create a loop to add all the answer elements
for (let answer of quizPageOne.answers) {
  const answerNumber = document.createElement("span");
  const quizAnswers = document.createElement("li");
  answerList.appendChild(answerNumber);
  answerList.appendChild(quizAnswers);

  answerNumber.innerText = " ";
  quizAnswers.innerText = answer;
}
