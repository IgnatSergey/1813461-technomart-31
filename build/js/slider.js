const slides = document.querySelectorAll(".slider-item");
const sliderControls = document.querySelectorAll(".slider-controls button");
const leafSlideBack = document.querySelector(".slider-button-back");
const leafSlideNext = document.querySelector(".slider-button-next");
const sliderContainer = document.querySelector(".slider-container");

let i = 0;
leafSlideBack.disabled = true;

let nameSliderContainer = "slider-container-"
let numberSliderContainer = 1;
let nameSliderContainerCurrent = nameSliderContainer + numberSliderContainer;

leafSlideNext.addEventListener("click", function() {
    leafSlideBack.disabled = false;
    slides[i].classList.remove("slide-current");
    sliderControls[i].classList.remove("current");
    i++;
    slides[i].classList.add("slide-current");
    sliderControls[i].classList.add("current");
    if (i === slides.length - 1) {
        leafSlideNext.disabled = true;
    }
    sliderContainer.classList.remove(nameSliderContainerCurrent);
    numberSliderContainer++;
    nameSliderContainerCurrent = nameSliderContainer + numberSliderContainer;
    sliderContainer.classList.add(nameSliderContainerCurrent);
});

leafSlideBack.addEventListener("click", function() {
    slides[i].classList.remove("slide-current");
    sliderControls[i].classList.remove("current");
    i--;
    slides[i].classList.add("slide-current");
    sliderControls[i].classList.add("current");
    if (i === 0) {
        leafSlideBack.disabled = true;
    }
    leafSlideNext.disabled = false;
    sliderContainer.classList.remove(nameSliderContainerCurrent);
    numberSliderContainer--;
    nameSliderContainerCurrent = nameSliderContainer + numberSliderContainer;
    sliderContainer.classList.add(nameSliderContainerCurrent)
});