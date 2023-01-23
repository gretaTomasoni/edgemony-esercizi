const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const quoteCard = (data) => {
  const wrapperCard = cE("div");
  const quoteEl = cE("h3");
  const authorEl = cE("p");
  const marks = cE("span");

  wrapperCard.className = "wrapper_card";
  quoteEl.className = "quote";
  authorEl.className = "author";
  marks.className = "marks";

  quoteEl.textContent = data.quote;
  authorEl.textContent = `- ${data.author}`;
  marks.textContent = ' "';

  wrapperCard.append(quoteEl, authorEl, marks);
  return wrapperCard;
};

// const randomNumber = (min, max) => {
//   Math.random() * (max - min) + min;
// };

export { cE, qS, quoteCard };
