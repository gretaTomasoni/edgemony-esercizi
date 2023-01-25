import myJson from "./mock.json" assert { type: "json" };

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const bodyEl = qS("body");
const productEl = qS(".products");

const createCards = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const colorEl = cE("span");
  const titleEl = cE("h3");
  const priceEl = cE("p");

  cardEl.className = "card";
  imgEl.className = "card_img";
  colorEl.className = "card_color";
  titleEl.className = "card_title";
  priceEl.className = "card_price";

  imgEl.setAttribute("src", data.image);
  if (data.color && data.color[0] === "black") {
    colorEl.style.backgroundColor = "black";
  }
  if (data.color && data.color[0] === "yellow") {
    colorEl.style.backgroundColor = "yellow";
  }
  if (data.color && data.color[1] === "yellow") {
    const color2 = cE("span");
    color2.className = "card_color_2";
    color2.style.backgroundColor = "yellow";
    cardEl.appendChild(color2);
  }
  if (!data.color) colorEl.style.border = "none";
  titleEl.textContent = data.title.toUpperCase();
  priceEl.textContent = `€ ${data.price}`;

  cardEl.append(imgEl, colorEl, titleEl, priceEl);
  return cardEl;
};

myJson.products.map((product) => productEl.appendChild(createCards(product)));
console.log(myJson);

// Grafico per sapere quanti prodotti per categoria ci sono nel mock
// 1. capire quante categorie ci sono,
// 2. capire quanti prodotti hanno una data categoria,
// 3. visualizzarli con grafico a candela,
// 4. appendere.

const ageStatusBarGen = (value, numberCategory) => {
  const wrapper = cE("div");
  const textEl = cE("h4");
  const statusEl = cE("div");

  wrapper.className = "age-status-bar";
  textEl.textContent = value;
  statusEl.className = "age-status-bar__status";
  statusEl.style.width = `${numberCategory * 100}px`;

  statusEl.style.backgroundColor = "black";

  wrapper.append(textEl, statusEl);
  return wrapper;
};

const categoryValue = myJson.products.map((product) => product.category);

let firstStage = {
  category: categoryValue.filter((category) => category === "t shirt"),
  text: "t shirt",
};
let secondStage = {
  category: categoryValue.filter((category) => category === "poster"),
  text: "poster",
};

bodyEl.appendChild(
  ageStatusBarGen(firstStage.text, firstStage.category.length)
);
bodyEl.appendChild(
  ageStatusBarGen(secondStage.text, secondStage.category.length)
);
