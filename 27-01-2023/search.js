import { GET } from "./api.js";
import { qS, qSA, tvCardGen } from "./utils.js";

const inputEl = qS("input");
const topRatedEl = qS(".top-rated");
const textEl = qS(".textEl");

GET("tv", "top_rated").then((data) => {
  data.results.map((tvserie) => topRatedEl.append(tvCardGen(tvserie)));
});

inputEl.addEventListener("input", (e) => {
  const cardEl = qSA(".card_tv");
  cardEl.forEach((card) => card.remove());

  const searchedValue = e.target.value;
  const searchedValue2 =
    searchedValue.charAt(0).toUpperCase() + searchedValue.slice(1);

  textEl.textContent = searchedValue2;

  GET("tv", "top_rated").then((data) => {
    data.results.map((tvserie) => {
      console.log(tvserie);
      if (tvserie.name.includes(searchedValue2)) {
        console.log(searchedValue);
        topRatedEl.append(tvCardGen(tvserie));
      }
    });
  });
});
