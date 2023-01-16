const productsElement = document.querySelector(".productsList");
const loader = document.querySelector(".spinner");

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
    titleElement.textContent = item.title;
    console.log(item.title);

    const descriptionElement = document.createElement("p");
    descriptionElement.className = "description_card";
    descriptionElement.textContent = item.description;
    console.log(item.description);

    cardContainer.append(imgElement, titleElement, descriptionElement);
    productsElement.appendChild(cardContainer);
  });
};
