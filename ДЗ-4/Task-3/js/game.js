//Конструктор вопросов
function question(
  gameQuest,
  option1,
  option2,
  option3,
  option4,
  correctAnswer,
  userAnswer
) {
  this.gameQuest = gameQuest;
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.correctAnswer = correctAnswer;
  this.userAnswer = userAnswer;
}
//Массив вопросов
var questions = [];
questions[0] = new question(
  "Кто был первым человеком на Земле?",
  " Адам",
  " Авель",
  " Ной",
  " Ева",
  1,
  ""
);
//Задаем переменные для работы с html
var questionShow = document.getElementById("question");
var answerOne = document.getElementById("answer1");
var answerTwo = document.getElementById("answer2");
var answerThree = document.getElementById("answer3");
var answerFour = document.getElementById("answer4");
var getAnswer,
  i = 0;
//do {
questionShow.textContent = questions[i].gameQuest;
answerOne.textContent = questions[i].option1;
answerTwo.textContent = questions[i].option2;
answerThree.textContent = questions[i].option3;
answerFour.textContent = questions[i].option4;
function getUserAnswer(obj) {
  switch (obj.id) {
    case "answer1":
      getAnswer = 1;
      questions[i].userAnswer = getAnswer;
      if (questions[i].userAnswer == questions[i].correctAnswer) {
        answerOne.style.backgroundColor = "green";
      } else {
        answerOne.style.backgroundColor = "red";
      }
      break;
    case "answer2":
      getAnswer = 2;
      questions[i].userAnswer = getAnswer;
      if (questions[i].userAnswer == questions[i].correctAnswer) {
        answerTwo.style.backgroundColor = "green";
      } else {
        answerTwo.style.backgroundColor = "red";
      }
      break;
    case "answer3":
      getAnswer = 3;
      questions[i].userAnswer = getAnswer;
      if (questions[i].userAnswer == questions[i].correctAnswer) {
        answerThree.style.backgroundColor = "green";
      } else {
        answerThree.style.backgroundColor = "red";
      }
      break;
    case "answer4":
      getAnswer = 4;
      questions[i].userAnswer = getAnswer;
      if (questions[i].userAnswer == questions[i].correctAnswer) {
        answerFour.style.backgroundColor = "green";
      } else {
        answerFour.style.backgroundColor = "red";
      }
      break;
  }

  console.log(getAnswer);
}
/*
} while (true);*/
