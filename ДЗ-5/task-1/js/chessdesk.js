var cages = [];
var desk = document.querySelector("div.desk");
var litter = [" ", "A", "B", "C", "D", "E", "F", "G", "H", " "];
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
for (var j = 0; j < 10; j++) {
  for (var i = 0; i < 10; i++) {
    cages[(i, j)] = document.createElement("div");
    desk.appendChild(cages[(i, j)]);
    cages[(i, j)].className = "cage";
    if (j == 0 || j == 9) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", litter[i]);
      cages[(i, j)].classList.add("borderCage");
      if (j == 0) {
        cages[(i, j)].classList.add("roteteCage");
      }
      continue;
    }
    if (i == 0 || i == 9) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", 9 - j);
      cages[(i, j)].classList.add("borderCage");
      if (i == 9) {
        cages[(i, j)].classList.add("roteteCage");
      }
      continue;
    }
    if (j == 1) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", chessMenBlack[i]);
      //cages[(i, j)].classList.add("roteteCage");
    }
    if (j == 2) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", "&#9823");
      //cages[(i, j)].classList.add("roteteCage");
    }
    if (j == 7) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", "&#9817");
    }
    if (j == 8) {
      cages[(i, j)].insertAdjacentHTML("afterbegin", chessMenWhite[i]);
    }
    if (j % 2) {
      if (i % 2) {
        cages[(i, j)].classList.add("whiteCage");
      } else {
        cages[(i, j)].classList.add("blackCage");
      }
    } else {
      if (i % 2) {
        cages[(i, j)].classList.add("blackCage");
      } else {
        cages[(i, j)].classList.add("whiteCage");
      }
    }
  }
}
