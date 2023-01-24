const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const createCards = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const userEls = cE("div");
  const completeNameEl = cE("div");
  const firstNameEl = cE("h3");
  const lastNameEl = cE("h3");
  const ageEl = cE("p");
  const hairEl = cE("p");

  cardEl.className = "card";
  imgEl.className = "card_img";
  userEls.className = "card_text";
  ageEl.className = "age";
  completeNameEl.className = "card_name";

  imgEl.setAttribute("src", data.image);
  firstNameEl.textContent = data.firstName;
  lastNameEl.textContent = data.lastName;
  //   ageEl.textContent = `Age: ${data.age}`;
  ageEl.textContent = parseInt(data.age);
  hairEl.textContent = `Hair color: ${data.hair.color}`;

  completeNameEl.append(firstNameEl, lastNameEl);
  userEls.append(completeNameEl, ageEl, hairEl);
  cardEl.append(imgEl, userEls);
  return cardEl;
};

const deleteCard = () => {
  const cardEl = document.querySelectorAll(".card");
  cardEl.forEach((card) => card.remove());
};

export { cE, qS, createCards, deleteCard };
