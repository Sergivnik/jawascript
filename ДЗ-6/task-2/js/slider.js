//var itemTitle = document.querySelectorAll(".small-photo p");
//var titele = itemSmallPhoto[1].innerText;

var cardsOfItem = document.getElementsByClassName("card-item");
for (var i = 0; i < cardsOfItem.length; i++) {
  cardsOfItem[i].onclick = showDetails;
}
function showDetails() {
  var itemTitle = this.childNodes[3].innerText;
  var itemBigPhoto = document.querySelector(".big-photo img");
  itemBigPhoto.src = "img/big/" + itemTitle + ".jpg";
  console.log(itemTitle);
}
