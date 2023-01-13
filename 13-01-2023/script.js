const sliderImg = document.querySelector(".slider_img");

const firstButton = document.querySelector(".first_button");
const secondButton = document.querySelector(".second_button");
const thirdButton = document.querySelector(".third_button");

const images = ["./img/photo1.jpg", "./img/photo2.jpg", "./img/photo3.jpg"];

sliderImg.setAttribute("src", images[0]);
firstButton.classList.add("active");

firstButton.addEventListener("click", () => {
  firstButton.classList.add("active");
  secondButton.classList.remove("active");
  thirdButton.classList.remove("active");

  sliderImg.setAttribute("src", images[0]);
});

secondButton.addEventListener("click", () => {
  firstButton.classList.remove("active");
  secondButton.classList.add("active");
  thirdButton.classList.remove("active");

  sliderImg.setAttribute("src", images[1]);
});

thirdButton.addEventListener("click", () => {
  firstButton.classList.remove("active");
  secondButton.classList.remove("active");
  thirdButton.classList.add("active");
  sliderImg.setAttribute("src", images[2]);
});
