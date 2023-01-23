// * Esercizio 1
/* Sulla base della lezione del giorno, ricreare una funzione asincrona (utilizzando ASYNC / AWAIT) 
che effettui una chiamata al seguente endpoint: https://dummyjson.com/quotes.
Lo stile è a scelta dell'utente e la quantità di quote da visualizzare è soltanto 1. */

import { cE, qS, quoteCard } from "./utils.js";
import { GET, getRandom } from "./api.js";

const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
const buttonEl = cE("button");
buttonEl.className = "button_random";
buttonEl.textContent = "Click for another quote";

bodyEl.append(wrapperEl, buttonEl);

GET("quotes/1").then((data) => wrapperEl.appendChild(quoteCard(data)));

// * Esercizio avanzato
/* Sulla base dell'esercizio 1, riadattare il proprio codice al fine di prevedere anche un pulsante 
al cui click su di esso, venga generata una nuova quote, in modo del tutto random. */

// addEventListener al bottone
// al cui click -> funzione per generare numero random
// inserisco il numero come argomento in una funzione GET

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

buttonEl.addEventListener("click", () => {
  const number = randomNumber(1, 30);
  console.log(number);
  getRandom("quotes", number).then((data) => {
    wrapperEl.innerHTML = "";
    wrapperEl.append(quoteCard(data));
  });
});
