const productsElement = document.querySelector(".productsList");
const loader = document.querySelector(".spinner");
const cartBtn = document.querySelector(".cart_button");
const tendina = document.querySelector(".tendina");

const cart = [];

cartBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    const newData = data.filter((item) => item.category.id === 43);
    dataManupulation(newData);
  })
  .catch((error) => {
    console.log("MIO ERRORE: ", error);
  });

const dataManupulation = (element) => {
  loader.style = "display: none";
  element.forEach((item) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.images);
    imgElement.className = "img_card";

    const titleElement = document.createElement("h1");
    titleElement.className = "title_card";
    titleElement.textContent = item.title.toUpperCase();
    // console.log(item.title);

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description_card";
    descriptionElement.textContent = item.description.slice(0, 30);
    // console.log(item.description);

    const priceElement = document.createElement("p");
    priceElement.className = "price_card";
    priceElement.textContent = "€ " + item.price;

    const btnElement = document.createElement("button");
    btnElement.className = "button";

    const btnImgElement = document.createElement("img");
    btnImgElement.className = "button_img";
    btnImgElement.setAttribute("src", "./img/cart.png");

    const btnTextElement = document.createElement("p");
    btnTextElement.className = "button_text";
    btnTextElement.textContent = "add to basket";

    btnElement.addEventListener("click", () => {
      cartPopulator(item);
    });

    btnElement.append(btnImgElement, btnTextElement);

    cardContainer.append(
      imgElement,
      titleElement,
      descriptionElement,
      priceElement,
      btnElement
    );
    productsElement.appendChild(cardContainer);
  });
};

const cartCreation = () => {
  tendina.innerHTML = "";

  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    cartEl.className = "cart_element";
    cartEl.innerHTML = `<p>${item.title}</p><p class="cart_price">€ ${item.price}</p><hr class="line">`;

    const quantityEl = document.createElement("p");
    quantityEl.className = "quantityEl";
    quantityEl.textContent = item.qty;

    const xEl = document.createElement("h3");
    xEl.className = "x_button";
    xEl.textContent = "X";

    xEl.addEventListener("click", () => {
      xEl.remove();
      quantityEl.remove();
      cartEl.remove();
      cart.splice(index, 1);
    });

    tendina.append(xEl, quantityEl, cartEl);
  });
};

const cartPopulator = (item) => {
  const newCartObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };

  const search = cart.filter((element) => {
    if (element.id === newCartObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newCartObj);
  }

  console.log(cart);
  cartCreation();
};
