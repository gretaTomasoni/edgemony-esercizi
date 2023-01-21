// const productsElement = document.querySelector(".productsList");
const loader = document.querySelector(".spinner");
const cartBtn = document.querySelector(".cart_button");
const tendina = document.querySelector(".tendina");
const textEmptyCart = document.createElement("p");
tendina.appendChild(textEmptyCart);
const totalQty = document.createElement("h3");

const select = document.querySelector("#categorySelect");
let listaProdotti;

const cart = [];

cartBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
  if (cart.length === 0) {
    textEmptyCart.textContent = "Il tuo carrello è vuoto";
  }
});

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    listaProdotti = data;
    console.log(listaProdotti);
    dataManupulation(listaProdotti, ".productsList");
  })
  .catch((error) => {
    console.log("MIO ERRORE: ", error);
  });

const dataManupulation = (element, divId) => {
  loader.style = "display: none";
  const divDaAppendere = document.querySelector(divId);
  divDaAppendere.innerHTML = "";

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
      console.log(cart);
    });

    btnElement.append(btnImgElement, btnTextElement);
    cardContainer.append(
      imgElement,
      titleElement,
      descriptionElement,
      priceElement,
      btnElement
    );

    divDaAppendere.appendChild(cardContainer);

    // productsElement.appendChild(cardContainer);
  });
};

const cartCreation = () => {
  // PER QUANTITA
  sum();

  tendina.innerHTML = "";
  totalQty.className = "totalQty";

  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    cartEl.className = "cart_element";
    cartEl.innerHTML = `<p>${item.title}</p><p class="cart_price">€ ${
      item.price * item.qty
    }</p><hr class="line">`;

    const quantityEl = document.createElement("p");
    quantityEl.className = "quantityEl";
    quantityEl.textContent = item.qty;

    const lessquantityEl = document.createElement("button");
    lessquantityEl.className = "lessquantityEl";
    lessquantityEl.textContent = "-";

    const plusquantityEl = document.createElement("button");
    plusquantityEl.className = "plusquantityEl";
    plusquantityEl.textContent = "+";

    const xEl = document.createElement("h3");
    xEl.className = "x_button";
    xEl.textContent = "X";

    lessquantityEl.addEventListener("click", () => {
      if (item.qty >= 1) {
        item.qty--;
        sum();
        quantityEl.textContent = item.qty;
        cartEl.innerHTML = `<p>${item.title}</p><p class="cart_price">€ ${
          item.price * item.qty
        }</p><hr class="line">`;
      }

      if (item.qty === 0) {
        xEl.remove();
        lessquantityEl.remove();
        plusquantityEl.remove();
        quantityEl.remove();
        cartEl.remove();
        cart.splice(index, 1);
      }
    });

    plusquantityEl.addEventListener("click", () => {
      if (item.qty > 0) {
        item.qty++;
        sum();
        quantityEl.textContent = item.qty;
        cartEl.innerHTML = `<p>${item.title}</p><p class="cart_price">€ ${
          item.price * item.qty
        }</p><hr class="line">`;
      }
    });

    xEl.addEventListener("click", () => {
      xEl.remove();
      lessquantityEl.remove();
      plusquantityEl.remove();
      quantityEl.remove();
      cartEl.remove();
      cart.splice(index, 1);
      sum();
    });

    tendina.appendChild(totalQty);

    tendina.append(
      xEl,
      quantityEl,
      lessquantityEl,
      plusquantityEl,
      cartEl,
      totalQty,
      textEmptyCart
    );
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

  if (cart.length === 0) {
    textEmptyCart.textContent = "Il tuo carrello è vuoto";
  }
  cartCreation();
};

const sum = () => {
  let total = 0;
  cart.forEach((item) => {
    total = total + item.qty;
  });
  totalQty.textContent = "Totale prodotti: " + total;
  if (total === 0) {
    textEmptyCart.textContent = "Il tuo carrello è vuoto";
    totalQty.textContent = "";
  } else {
    textEmptyCart.textContent = "";
  }
};

// TODO: FILTRARE PER CATEGORIE

const metodoGetCat = () => {
  fetch("https://api.escuelajs.co/api/v1/categories/")
    .then((res) => res.json())
    .then((data) => {
      creazioneSelectCategories(data);
    })
    .catch((e) => console.log("Questo è il mio errore: ", e));
};
metodoGetCat();

const creazioneSelectCategories = (arrayCat) => {
  arrayCat.forEach((item) => {
    const optionValue = document.createElement("option");
    optionValue.textContent = item.name;
    optionValue.setAttribute("value", item.id);
    select.appendChild(optionValue);
  });
};

select.addEventListener("change", (e) => {
  console.log(select.value);
  filterByCategory(select.value);
});

const filterByCategory = (idCat) => {
  const fiteredProducts = listaProdotti.filter(
    (item) => item.category.id === parseInt(idCat)
  );
  console.log(fiteredProducts);
  dataManupulation(fiteredProducts, ".productsList");
};
