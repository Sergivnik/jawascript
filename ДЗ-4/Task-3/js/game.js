//Конструктор вопросов
function question(
  gameQuest,
  option1,
  option2,
  option3,
  option4,
  correctAnswer,
  userAnswer,
  point
) {
  this.gameQuest = gameQuest;
  this.option1 = option1;
  this.option2 = option2;
  this.option3 = option3;
  this.option4 = option4;
  this.correctAnswer = correctAnswer;
  this.userAnswer = userAnswer;
  this.point = point;
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
  "",
  "1000 рублей"
);
questions[1] = new question(
  "Кто был первым человеком на Луне?",
  " Адам",
  " Армстронг",
  " Никто",
  " Гагарин",
  3,
  "",
  "10000 рублей"
);
questions[2] = new question(
  "Кто будет первым человеком на Марсе?",
  " Адам",
  " Армстронг",
  " Никто",
  " Илон Маск",
  4,
  "",
  "100000 рублей"
);
questions[3] = new question(
  "Кто был первым человеком на космосе?",
  " Адам",
  " Гагарин",
  " Никто",
  " Илон Маск",
  2,
  "",
  "1000000 рублей"
);
//Задаем переменные для работы с html
var questionShow = document.getElementById("question");
var answerOne = document.getElementById("answer1");
var answerTwo = document.getElementById("answer2");
var answerThree = document.getElementById("answer3");
var answerFour = document.getElementById("answer4");
var statusGame = document.getElementById("statusOfGame");
var getAnswer,
  gameGoOn = true;
i = 0;
questionShow.textContent = questions[i].gameQuest;
answerOne.textContent = questions[i].option1;
answerTwo.textContent = questions[i].option2;
answerThree.textContent = questions[i].option3;
answerFour.textContent = questions[i].option4;
statusGame.textContent = "Игра началась!";
function getUserAnswer(obj) {
  if (gameGoOn) {
    switch (obj.id) {
      case "answer1":
        getAnswer = 1;
        questions[i].userAnswer = getAnswer;
        if (questions[i].userAnswer == questions[i].correctAnswer) {
          answerOne.style.backgroundColor = "green";
        } else {
          answerOne.style.backgroundColor = "red";
          gameGoOn = false;
          statusGame.textContent =
            "Правильный ответ " +
            textCorrectAnswer(questions[i].correctAnswer) +
            " Играть заново F5";
        }
        break;
      case "answer2":
        getAnswer = 2;
        questions[i].userAnswer = getAnswer;
        if (questions[i].userAnswer == questions[i].correctAnswer) {
          answerTwo.style.backgroundColor = "green";
        } else {
          answerTwo.style.backgroundColor = "red";
          gameGoOn = false;
          statusGame.textContent =
            "Правильный ответ " +
            textCorrectAnswer(questions[i].correctAnswer) +
            " Играть заново F5";
        }
        break;
      case "answer3":
        getAnswer = 3;
        questions[i].userAnswer = getAnswer;
        if (questions[i].userAnswer == questions[i].correctAnswer) {
          answerThree.style.backgroundColor = "green";
        } else {
          answerThree.style.backgroundColor = "red";
          gameGoOn = false;
          statusGame.textContent =
            "Правильный ответ " +
            textCorrectAnswer(questions[i].correctAnswer) +
            " Играть заново F5";
        }
        break;
      case "answer4":
        getAnswer = 4;
        questions[i].userAnswer = getAnswer;
        if (questions[i].userAnswer == questions[i].correctAnswer) {
          answerFour.style.backgroundColor = "green";
        } else {
          answerFour.style.backgroundColor = "red";
          gameGoOn = false;
          statusGame.textContent =
            "Правильный ответ " +
            textCorrectAnswer(questions[i].correctAnswer) +
            " Играть заново F5";
        }
        break;
    }
  }
  if (gameGoOn) {
    if (i < 3) {
      statusGame.textContent = questions[i].point;
      setTimeout(nextQuestion, 1000);
    } else {
      gameGoOn = false;
      statusGame.textContent = "Вы победили!!! Играть заново F5";
    }
  }
  function nextQuestion() {
    i++;
    questionShow.textContent = questions[i].gameQuest;
    answerOne.textContent = questions[i].option1;
    answerTwo.textContent = questions[i].option2;
    answerThree.textContent = questions[i].option3;
    answerFour.textContent = questions[i].option4;
    answerOne.style.backgroundColor = "#aaa";
    answerTwo.style.backgroundColor = "#aaa";
    answerThree.style.backgroundColor = "#aaa";
    answerFour.style.backgroundColor = "#aaa";
  }
  function textCorrectAnswer(numberOfAnswer) {
    switch (numberOfAnswer) {
      case 1:
        return questions[i].option1;
      case 2:
        return questions[i].option2;
      case 3:
        return questions[i].option3;
      case 4:
        return questions[i].option4;
    }
  }
}
