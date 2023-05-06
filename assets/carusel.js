const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const slides = document.getElementsByClassName("slide");
let counter = 0;

for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  slide.style.left = `${i * 100}%`;
}

plusBtn.addEventListener("click", function () {
  counter = counter - 1;
  slideImage();
});

minusBtn.addEventListener("click", function () {
  counter = counter + 1;
  slideImage();
});

function slideImage() {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.style.transform = `translateX(${ counter * 100 }%)`;
  }
}