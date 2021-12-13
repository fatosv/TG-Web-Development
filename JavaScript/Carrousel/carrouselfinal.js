const carouselSlide = document.querySelector(".carouselSlide");
const carouselImages = document.querySelectorAll(".carouselSlide img");
const prevButton = document.querySelector(".prevButton");
const nextButton = document.querySelector(".nextButton");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextButton.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform .5s ease-in";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevButton.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform .5s ease-in";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
