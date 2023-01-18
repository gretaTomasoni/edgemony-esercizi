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
    // console.log(data);
    dataManupulation(data);
  })
  .catch((error) => {
    console.log("MIO ERRORE: ", error);
  });

const dataManupulation = (data) => {
  loader.style = "display: none";
  data.shift();
  data.forEach((item) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";

    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", item.images);
    imgElement.className = "img_card";

    const titleElement = document.createElement("h1");
    titleElement.className = "title_card";
    titleElement.textContent = item.title.slice(0, 10).toUpperCase();
    // console.log(item.title);

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description_card";
    descriptionElement.textContent = item.description.slice(0, 30);
    // console.log(item.description);

    const btnElement = document.createElement("button");
    btnElement.className = "button";

    const btnImgElement = document.createElement("img");
    btnImgElement.className = "button_img";
    btnImgElement.setAttribute("src", "./img/cart.png");

    const btnTextElement = document.createElement("p");
    btnTextElement.className = "button_text";
    btnTextElement.textContent = "add to basket";

    btnElement.addEventListener("click", () => {
      cart.push(item);
      // alert("Elemento aggiunto al carrello");
      cartCreation();
    });

    btnElement.append(btnImgElement, btnTextElement);

    cardContainer.append(
      imgElement,
      titleElement,
      descriptionElement,
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

    const xEl = document.createElement("h3");
    xEl.className = "x_button";
    xEl.textContent = "X";

    xEl.addEventListener("click", () => {
      xEl.remove();
      cartEl.remove();
      cart.splice(index, 1);
    });

    tendina.append(xEl, cartEl);
  });
};
