//Задание 1
alert("Задание 1");
var tCel = +prompt("Введите температуру в градусах Цельсия");
var tFar = (9 * tCel) / 5 + 32;
alert(
  "Температуре " +
    tCel +
    " в градусах цельсия, соответствует температура " +
    tFar +
    " в грдусах по Фаренгейту"
);

//Задание 2
alert("Задание 2");
var admin = null;
var name = "Василий";
admin = name;
alert("Переменная admin=" + admin);

//Задание 3
var a = +prompt("a=");
var b = +prompt("b=");
a = b - a;
b = b - a;
a = a + b;
alert("Теперь a=" + a + "а b=" + b);

//Задание 4
// 1000+"108" будет равно "1000108" т.к. операция сложения имеет меньший приоритет чем операция Конкатенация

//Задание 5
// ну так, в первом приближении разобрался, если не имеет значение время выполнения скрипта, то используем asunc,
// если важен порядок выполнения скриптов, то defer. А если важно еще и место в загрузке HTML кода, то ставим script
// в соответствующее место html кода. Но пока с трудом понимаю разницу))
