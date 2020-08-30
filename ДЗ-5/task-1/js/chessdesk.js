var cages = [];//Массив клеток
var desk = document.querySelector("div.desk");
var litter = [" ", "A", "B", "C", "D", "E", "F", "G", "H", " "]; //Массив букв
//Массив черных фигур
var chessMenBlack = [
  "",
  "&#9820",
  "&#9822",
  "&#9821",
  "&#9819",
  "&#9818",
  "&#9821",
  "&#9822",
  "&#9820",
  "",
];
//Массив белых фигур
var chessMenWhite = [
  "",
  "&#9814",
  "&#9816",
  "&#9815",
  "&#9813",
  "&#9812",
  "&#9815",
  "&#9816",
  "&#9814",
  "",
];
//Создание клиток поля и полей с цифрами и буквами
for (var j = 0; j < 10; j++) {
  for (var i = 0; i < 10; i++) {
//Добавляем клетку с координатами [i,j]
    cages[(i, j)] = document.createElement("div");
    desk.appendChild(cages[(i, j)]);
    cages[(i, j)].className = "cage";
//Заполняем верхнюю и нижнюю строку клеток буквами координат
    if (j == 0 || j == 9) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", litter[i]);
      cages[(i, j)].classList.add("borderCage");
      if (j == 0) {
        cages[(i, j)].classList.add("roteteCage");
      }
      continue;
    }
//Заполняем правый и левый столбец цифрами
    if (i == 0 || i == 9) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", 9 - j);
      cages[(i, j)].classList.add("borderCage");//Цвет полей доски
      if (i == 9) {
        cages[(i, j)].classList.add("roteteCage");
      }
      continue;
    }
//Заполняем клетки черными фигурами
    if (j == 1) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", chessMenBlack[i]);
      //cages[(i, j)].classList.add("roteteCage");
    }
//Заполняем клетки черными пешками
    if (j == 2) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", "&#9823");
      //cages[(i, j)].classList.add("roteteCage");
    }
//Заполняем клетки белыми пешками
    if (j == 7) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", "&#9817");
    }
//Заполняем клетки белыми фигурами
    if (j == 8) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", chessMenWhite[i]);
    }
//Раскрашиваем клетки в "черный" и "белый" цвета
    if (j % 2) {
      if (i % 2) {
        cages[(i, j)].classList.add("whiteCage");//Белая клетка
      } else {
        cages[(i, j)].classList.add("blackCage");//Черная клетка
      }
    } else {
      if (i % 2) {
        cages[(i, j)].classList.add("blackCage");//Черная клетка
      } else {
        cages[(i, j)].classList.add("whiteCage");//Белая клетка
      }
    }
  }
}
