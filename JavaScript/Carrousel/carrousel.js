const carousel = document.querySelector(".carouselList");
const slides = Array.from(carousel.children);
const nextButton = document.querySelector(".buttonNext");
const prevButton = document.querySelector(".buttonPrev");

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides next to eachother

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (carousel, currentSlide, targetSlide) => {
  carousel.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("slideCurrent");
  targetSlide.classList.add("slideCurrent");
};

//when i click previous, slide moves to the left
prevButton.addEventListener("click", (e) => {
  const currentSlide = carousel.querySelector(".slideCurrent");
  const prevSlide = currentSlide.previousElementSibling;

  moveToSlide(carousel, currentSlide, prevSlide);
});

//when i click next, slide moves to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = carousel.querySelector(".slideCurrent");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(carousel, currentSlide, nextSlide);
});
