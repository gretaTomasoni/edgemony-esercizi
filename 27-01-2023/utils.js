const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

const tvCardGen = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const logoEl = cE("img");

  cardEl.setAttribute("id", data.id);
  cardEl.setAttribute("title", data.name);
  cardEl.className = "card_tv";
  if (data.backdrop_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`
    );
  } else {
    imgEl.setAttribute(
      "src",
      "https://troianiortodonzia.it/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
    );
  }
  imgEl.setAttribute("alt", data.name);

  logoEl.className = "logo_card";
  logoEl.setAttribute("src", "./img/icon_netflix.png");

  cardEl.append(imgEl, logoEl);

  return cardEl;
};

export { qS, qSA, cE, tvCardGen };
