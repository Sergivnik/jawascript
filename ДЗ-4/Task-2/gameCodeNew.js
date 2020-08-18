var event, ok;
//------------------------------------------
function isAnswer(q, event) {
  if (isNaN(event) || !isFinite(event)) {
    alert("Вы ввели недопустимый символ");
    return false;
  } else if (event < 1 || event > q) {
    alert("Ваше число выходит из допустимого диапозона");
    return false;
  }
  return true;
}
do {
  //Выводим первый вопрос
  ok = false;
  event = works[0].answer();
  if (event == -1) {
    break;
  } else {
    ok = isAnswer(works[0].numberOfOptions, event);
  }
} while (!ok);
switch (event) {
  case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
    do {
      ok = false;
      event = works[1].answer();
      if (event == -1) {
        break;
      } else {
        ok = isAnswer(works[1].numberOfOptions, event);
      }
    } while (!ok);
    switch (event) {
      case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
        do {
          ok = false;
          event = works[3].answer();
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works[3].numberOfOptions, event);
          }
        } while (!ok);

        break;
      case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
        do {
          ok = false;
          event = works[3].answer();
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works[3].numberOfOptions, event);
          }
        } while (!ok);

        break;
      case -1: // Второе действие
        break;
      default:
        alert("Ошибка");
    }
    break;
  case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
    do {
      ok = false;
      event = works[2].answer();
      if (event == -1) {
        break;
      } else {
        ok = isAnswer(works[2].numberOfOptions, event);
      }
    } while (!ok);
    switch (event) {
      case 1: // Второе действие
        do {
          ok = false;
          event = works[3].answer();
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works[3].numberOfOptions, event);
          }
        } while (!ok);

        break;
      case 2: // Второе действие
        do {
          ok = false;
          event = works[3].answer();
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works[3].numberOfOptions, event);
          }
        } while (!ok);

        break;
      case -1: // Второе действие
        break;
      default:
        alert("Ошибка");
    }
    break;
  case -1: // Первое действие
    break;
  default:
    alert("Ошибка");
}
do {
  ok = false;
  event = +prompt("Введите номер окна от 1 до 4 -1 - Выход из игры");
  if (event == -1) {
    break;
  } else {
    ok = isAnswer(4, event);
  }
} while (!ok);
alert(
  "На вопрос" +
    works[event - 1].quest +
    "Вы ответили\n" +
    works[event - 1].userAnswer
);
console.log(works);
alert("Спасибо за игру");
