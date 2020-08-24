var cages = [];
var desk = document.querySelector("div.desk");
var litter = [" ", "A", "B", "C", "D", "E", "F", "G", "H", " "];
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
      continue;
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
