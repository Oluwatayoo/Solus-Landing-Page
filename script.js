const slide = document.getElementById("slide");
let isFirstVisible = true;

function nextSlide() {
  isFirstVisible = !isFirstVisible;

  slide.style.transform = isFirstVisible
    ? "translateX(0%)"
    : "translateX(-100%)";
}

function prevSlide() {
  // Same behavior (only 2 cards)
  nextSlide();
}
