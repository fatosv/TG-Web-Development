const button = document.querySelector(".carouselButton");
const prevButton = document.querySelector(".prevButton");
console.log(prevButton);
const nextButton = document.querySelector(".nextButton");
console.log(nextButton);
const carousel = document.querySelector(".carousel");
console.log(carousel);
const slideList = document.querySelector(".slidesList");
console.log(slideList);
const slides = Array.from(slideList.children);
console.log(slides);

const moveSlideNext = (activeSlide, nextSlide) => {
  activeSlide.classList.remove("slideActive");
  nextSlide.classList.add("slideActive");
};

const moveSlidePrev = (activeSlide, prevSlide) => {
  activeSlide.classList.remove("slideActive");
  prevSlide.classList.add("slideActive");
};

const infiniteSlides = (activeSlide, nextSlide, firstSlide, lastSlide) => {
  console.log(activeSlide);
  console.log(nextSlide);
  console.log(firstSlide);
  console.log(lastSlide);

  if (activeSlide === lastSlide) {
    nextSlide = firstSlide;
  }
};

// const moveSlides = () => {
//   const activeSlide = document.querySelector(".slideActive");
//   console.log(activeSlide);
//   const activeIndex = slides.indexOf(activeSlide);
//   console.log(activeIndex);
//   let next, prev;
//   if (activeIndex === slides.length - 1) {
//     next = slides[0];
//   } else {
//     next = slides[activeIndex + 1];
//   }
//   if (activeIndex === 0) {
//     prev = slides[slides.length - 1];
//   } else {
//     prev = slides[activeIndex - 1];
//   }
//   return [next, prev];
// };

nextButton.addEventListener("click", () => {
  const activeSlide = document.querySelector(".slideActive");
  const nextSlide = activeSlide.nextElementSibling;
  const lastSlide = slides[slides.length - 1];
  const firstSlide = slides[0];

  infiniteSlides(activeSlide, nextSlide, firstSlide, lastSlide);
  moveSlideNext(activeSlide, nextSlide);
});

prevButton.addEventListener("click", () => {
  const activeSlide = document.querySelector(".slideActive");
  const prevSlide = activeSlide.previousElementSibling;

  moveSlidePrev(activeSlide, prevSlide);
});
