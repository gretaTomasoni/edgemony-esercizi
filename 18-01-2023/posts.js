const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputImage = document.querySelector("#image");
const inputDescription = document.querySelector("#description");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newObj = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };
  funzionePost(newObj);
});

const funzionePost = (objBody) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(objBody),
  })
    .then((res) => res.json())
    .then((data) => console.log("RISPOSTA POST: ", data))
    .catch((e) => console.log("ERRORE: ", e));
};
