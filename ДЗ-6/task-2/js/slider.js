var cardsOfItem = document.getElementsByClassName("card-item");
for (var i = 0; i < cardsOfItem.length; i++) {
  cardsOfItem[i].onclick = showDetails;
}
var buttonToBasket = document.querySelector(".buy");
buttonToBasket.onclick = addToBasket;
var numberOfItem = 0;
var sumOfBasket = 0;

function showDetails() {
  var itemTitle = this.childNodes[3].innerText;
  var itemBigPhoto = document.querySelector(".big-photo img");
  var itemTitleBig = document.querySelector(".big-photo h2");
  var itemDecribtionBig = document.querySelector(".big-photo p");
  var itemPriceBig = document.querySelector(".big-photo span");
  itemBigPhoto.src = "img/big/" + itemTitle + ".jpg";
  itemTitleBig.innerText = itemTitle;
  for (var i = 0; i < items.length; i++) {
    numberOfItem = i;
    if (items[i].title == itemTitle) {
      if (items[i].description == undefined) {
        itemDecribtionBig.innerText = "Информация недоступна для вашего уровня доступа"
      } else {
        itemDecribtionBig.innerText = items[i].description;
      }
      if (items[i].price == undefined) {
        itemPriceBig.innerText = "Товар в данный момент не поступил в продажу"
      } else {
        itemPriceBig.innerText = items[i].price + " золотых дублонов";
      }
      break;
    }
  };
  itemBigPhoto.onerror = function () {
    itemBigPhoto.src = "img/big/error.png";
  }
}

function addToBasket() {
  var basket = document.querySelector(".basket");
  var quantity;
  var sum = document.querySelector(".basket span");
  if (items[numberOfItem].price == undefined) {
    alert("К сожалению товара нет в наличии");
    return;
  }
  while (isNaN(quantity)) {
    quantity = prompt("Введите количество товара");
  }
  basket.insertAdjacentHTML("beforeend", "<div class='basket-card' ><img src='img/small/" + items[numberOfItem].title + ".jpg'/><p>" + items[numberOfItem].title + "</p><p>Количестов товара " + quantity + " шт</p><p>Цена " + items[numberOfItem].price + " золотых дублонов</p></div>");
  sumOfBasket = sumOfBasket + quantity * items[numberOfItem].price;
  sum.innerText = sumOfBasket;
}

function item(title, description, price) {
  this.title = title;
  this.description = description;
  this.price = price
}

var items = [];
items[0] = new item("Городовиковск", "город в составе Калмыкии в России. Административный центр Городовиковского района. Образует Городовиковское городское муниципальное образование как единственный в нём населённый пункт.Расположен на крайнем западе Калмыкии, в 234 км к западу от столицы республики, Элисты.\n Население — 8571 чел. (2020).\n Основан как село Башанта в 1871 году, в 1971 году получил статус города.", 100000);
items[1] = new item("Куртамыш", " административный центр Куртамышского района Курганской области. В рамках административно-территориального устройства является городом районного подчинения. В рамках муниципального устройства образует муниципальное образование город Куртамыш со статусом городского поселения как единственный населённый пункт в его составе.\n Население города — 16 507 чел. (2020).\n Расположен на реке Куртамыш (приток Тобола).", 200000);
items[2] = new item("Олекминск", "город (с 1783) в России, административный центр Олёкминского района Республики Саха (Якутия), образует городское поселение город Олёкминск.\n Население 9213 человек (2018)", 150000);
items[3] = new item("Омск", "один из крупнейших городов России, расположенный на слиянии рек Иртыша и Оми, крупный научный, культурный, спортивный и промышленный центр. Город трудовой славы.\n Население	1 154 507 человек", 3000000);
items[4] = new item("Покровск", "село в Козельском районе Калужской области. Является административным центром сельского поселения «Село Покровск».Село расположено на правом берегу реки Клютома у впадения в неё реки Сырогожа, примерно в 14 км к северо-западу от города Козельск.\n Население	182 человека, но работящие...", 15000);
items[5] = new item("Хилок");