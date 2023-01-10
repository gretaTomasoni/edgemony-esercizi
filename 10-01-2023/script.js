import { products } from "./mocks.js";

const bodyEl = document.body;

const heroElm = document.createElement("div");
const imgHeroElm = document.createElement("img");
const textHeroElm = document.createElement("div");
const titleHeroElm = document.createElement("h1");
let descriptionHeroElm = document.createElement("p");

heroElm.className = "hero";

imgHeroElm.className = "hero_img";
imgHeroElm.setAttribute("src", "../img/hero.jpg");

textHeroElm.className = "hero_text";

titleHeroElm.className = "hero_title";
titleHeroElm.textContent = "DUNKIN’ Donuts";

descriptionHeroElm.className = "hero_description";
descriptionHeroElm.textContent =
  "WE ARE PROUD TO SERVE OVER 5 MILLION GUESTS A DAY IN 46 COUNTRIES.";

function formatting(sentence) {
  let sentenceLower = sentence.toLowerCase();
  return (
    sentenceLower && sentenceLower[0].toUpperCase() + sentenceLower.slice(1)
  );
}
let textDescriptionFormatting = formatting(descriptionHeroElm.textContent);
// ! inserendo la funizone, il testo non è più un elemento <p> - non posso stilizzarlo

textHeroElm.append(titleHeroElm, textDescriptionFormatting);
heroElm.append(imgHeroElm, textHeroElm);
bodyEl.appendChild(heroElm);

// TODO: AVANZATO;

const productListEl = document.createElement("div");
productListEl.className = "productListEl";
bodyEl.appendChild(productListEl);

const createCard = (products) => {
  const cardEl = document.createElement("div");
  const imgEl = document.createElement("img");
  const descriptionEl = document.createElement("p");

  cardEl.className = "card";

  imgEl.className = "card__img";
  imgEl.setAttribute("src", products.img);
  imgEl.setAttribute("alt", products.title);

  descriptionEl.className = "card__description";
  descriptionEl.textContent = products.description;

  cardEl.append(imgEl, descriptionEl);
  productListEl.appendChild(cardEl);
};

for (let i = 0; i < products.length; i++) {
  createCard(products[i]);
}
