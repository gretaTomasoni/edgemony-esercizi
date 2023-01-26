const bodyEl = document.querySelector("body");

const countDiv = document.querySelector(".count");
const container = document.querySelector(".div");

const buttonCount = document.querySelector("button");
const stopBtn = document.querySelector(".stop");
const imgGif = document.querySelector("iframe");

let count = 5;

countDiv.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    buttonCount.textContent = count;

    if (count > 0) {
      count--;
      stopBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        stopBtn.style.backgroundColor = "grey";
      });
    } else {
      clearInterval(intervalId);
      buttonCount.textContent = "Wait...";
      const timeoutId = setTimeout(() => {
        buttonCount.remove();
        container.remove();
        stopBtn.remove();
        bodyEl.style.background = "linear-gradient(86deg, #e65926, #7c0707)";
        imgGif.style.display = "flex";
      }, 1000);
    }
  }, 1000);
});
