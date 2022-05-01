const buttonSliderServices = document.querySelectorAll(
  ".button-services-slider"
);
const backgroundSliderServices = document.querySelector(".services-info");
const textSliderServices = document.querySelectorAll(".services-info-slide");
let currentButton = 0;
let nameBackgroundSliderServices = "services-info-";
let nameBackgroundSliderServicesCurrent = nameBackgroundSliderServices + 1;

for (let i = 0; i < buttonSliderServices.length; i++) {
  buttonSliderServices[i].addEventListener("click", function () {
    buttonSliderServices[currentButton].classList.remove("button-pressed");
    buttonSliderServices[i].classList.add("button-pressed");
    backgroundSliderServices.classList.remove(
      nameBackgroundSliderServicesCurrent
    );
    nameBackgroundSliderServicesCurrent =
      nameBackgroundSliderServices + (i + 1);
    backgroundSliderServices.classList.add(nameBackgroundSliderServicesCurrent);
    textSliderServices[currentButton].classList.remove(
      "services-info-slide-current"
    );
    textSliderServices[i].classList.add("services-info-slide-current");
    currentButton = i;
  });
}
console.log(nameBackgroundSliderServicesCurrent);
