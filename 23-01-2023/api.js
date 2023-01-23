// metodo classico - chiamata GET
// fetch("https://dummyjson.com/quotes/1")
//   .then((res) => res.json())
//   .then((data) => wrapperEl.appendChild(quoteCard(data)));

// * ASYNC / AWAIT

const BASE_URL = "https://dummyjson.com/";

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

const getRandom = async (endpoint, randomNumber) => {
  const res = await fetch(BASE_URL + endpoint + "/" + randomNumber);
  const data = await res.json();
  return data;
};

export { GET, getRandom };
