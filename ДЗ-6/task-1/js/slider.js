function changePhoto() {
  var path = this.src.slice(this.src.indexOf("small") + 5, this.src.length);
  smallPhoto[0].src = "img/big" + path;
  smallPhoto[0].onerror = function () {
    elementP.appendChild(elemPText);
    bigPhoto.insertBefore(elementP, smallPhoto[0]);
    setTimeout(f, 2000);
  };
  function f() {
    bigPhoto.removeChild(elementP);
  }
}
var elementP = document.createElement("h2");
var elemPText = document.createTextNode("А это Омск, лучше не смотреть");
var bigPhoto = document.querySelector(".big-photo");
var smallPhoto = document.getElementsByTagName("img");
for (var i = 1; i < smallPhoto.length; i++) {
  smallPhoto[i].onclick = changePhoto;
}
var cities = ["Городовиковск", "Куртамыш", "Олекминск", "Покровск", "Хилок"];
var arrows = document.querySelectorAll(".arrow");
for (var i = 0; i < arrows.length; i++) {
  arrows[i].onclick = carruselPhoto;
}
function carruselPhoto() {
  var city = smallPhoto[0].src.slice(
    smallPhoto[0].src.indexOf("big") + 4,
    smallPhoto[0].src.length - 4
  );
  city = decodeURIComponent(city);
  for (var i = 0; i < cities.length; i++) {
    if (city == cities[i]) {
      if (this == arrows[0]) {
        if (i == 0) {
          smallPhoto[0].src = "img/big/" + cities[cities.length - 1] + ".jpg";
        } else {
          smallPhoto[0].src = "img/big/" + cities[i - 1] + ".jpg";
        }
      } else {
        if (i == cities.length - 1) {
          smallPhoto[0].src = "img/big/" + cities[0] + ".jpg";
        } else {
          smallPhoto[0].src = "img/big/" + cities[i + 1] + ".jpg";
        }
      }
    }
  }
}
