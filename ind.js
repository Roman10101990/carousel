const slider = document.querySelector(".slider");
const sliderImg = document.querySelectorAll(".slider img");

const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 1;
let size = sliderImg[0].clientWidth;
let x = -size * counter;
slider.style.transform = "translateX(" + -size * counter + "px)";

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

nextBtn.addEventListener("click", () => {
  if (counter >= sliderImg.length - 1) return;
  slider.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slider.style.transform = "translateX(" + -size * counter + "px)";
});

slider.addEventListener("transitionend", () => {
  if (sliderImg[counter].id === "lastClone") {
    slider.style.transition = "none";
    counter = sliderImg.length - 2;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (sliderImg[counter].id === "firstClone") {
    slider.style.transition = "none";
    counter = sliderImg.length - counter;
    slider.style.transform = "translateX(" + -size * counter + "px)";
  }
});
