import { cE, qS, createCards, deleteCard } from "./utils.js";
import { GET } from "./api.js";

// * Esercizio 1
/* Sulla base della lezione del giorno, creare una paginetta che effettui una chiamata di tipo GET 
all'endpoint https://dummyjson.com/users, renderizzare la lista di utenti, creando delle cards 
con i valori a vostra scelta (es. nome, cognome, ecc...) */

const bodyEl = qS("body");
const cards = cE("div");
const inputDiv = cE("div");
const searchNameEl = cE("input");
const imgsearch = cE("img");

cards.className = "wrapper";
searchNameEl.className = "name_research";
imgsearch.className = "img_research";
inputDiv.className = "input_container";

imgsearch.setAttribute("src", "./img/icons8-search-50.png");

inputDiv.append(searchNameEl, imgsearch);
bodyEl.append(inputDiv, cards);

GET("users").then((data) => {
  data.users.map((user) => cards.appendChild(createCards(user)));
});

// * Esercizio avanzato
/* Sulla base dell'esercizio 1, creare un filtro tramite input che vada a filtrare la lista
degli utenti per nome e/o cognome */

searchNameEl.addEventListener("input", (e) => {
  deleteCard();
  const searchedValue = e.target.value;
  GET("users").then((data) => {
    data.users.map((user) => {
      if (user.firstName.includes(searchedValue)) {
        console.log(searchedValue);
        cards.appendChild(createCards(user));
      }
    });
  });
});
