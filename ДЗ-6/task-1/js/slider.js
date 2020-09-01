var indexError = 0; //Номер картинки с отсутствующим файлом
var smallPhoto = document.getElementsByTagName("img"); //Массив картинок
for (var i = 1; i < smallPhoto.length; i++) {
  smallPhoto[i].onclick = changePhoto; //Назначаем функцию по клику на маленькой картинке
}
//Массив названий картинок
var cities = [
  "Городовиковск",
  "Куртамыш",
  "Олекминск",
  "Омск",
  "Покровск",
  "Хилок",
];
var arrows = document.querySelectorAll(".arrow");
for (var i = 0; i < arrows.length; i++) {
  arrows[i].onclick = carruselPhoto; //Нвзначаем функуию по клику на стрелки
}
//Функция смены картинок при кликании по маленькой картинке
function changePhoto() {
  var path = this.src.slice(this.src.indexOf("small") + 5, this.src.length);
  smallPhoto[0].src = "img/big" + path;
  //Функция обработки ошибочного пути файла
  smallPhoto[0].onerror = function () {
    smallPhoto[0].src = "img/big/error.png";
  };
}
//Функция слайдера
function carruselPhoto() {
  //Переменная названия предыдущей большой картинки
  var city = smallPhoto[0].src.slice(
    smallPhoto[0].src.indexOf("big") + 4,
    smallPhoto[0].src.length - 4
  );
  city = decodeURIComponent(city);
  //Перебираем массив названий картинок
  for (var i = 0; i < cities.length; i++) {
    if (city == cities[i]) {
      //Нажатие на левую стрелку
      if (this == arrows[0]) {
        if (i == 0) {
          smallPhoto[0].src = "img/big/" + cities[cities.length - 1] + ".jpg";
          indexError = cities.length - 1;
          break;
        } else {
          smallPhoto[0].src = "img/big/" + cities[i - 1] + ".jpg";
          indexError = i - 1;
          break;
        }
        //Нажатие на правую стрелку
      } else {
        if (i == cities.length - 1) {
          smallPhoto[0].src = "img/big/" + cities[0] + ".jpg";
          indexError = 0;
          break;
        } else {
          smallPhoto[0].src = "img/big/" + cities[i + 1] + ".jpg";
          indexError = i + 1;
          break;
        }
      }
    }
    //Вывод следующего изображения после ошибочного
    if (city == "error") {
      if (this == arrows[1]) {
        indexError = indexError + 1;
      } else {
        indexError = indexError - 1;
      }
      smallPhoto[0].src = "img/big/" + cities[indexError] + ".jpg";
      break;
    }
  }
  //Функция обработки ошибочного пути файла
  smallPhoto[0].onerror = function () {
    smallPhoto[0].src = "img/big/error.png";
  };
}
