const modalBuyLink = document.querySelectorAll(".button-card-buy");
const modalMarkerLink = document.querySelectorAll(".button-card-marker");
const buyPopup = document.querySelector(".modal-buy");
const modalBuyClose = buyPopup.querySelector(".modal-close");
const continueShopping = buyPopup.querySelector(".button-continue-shopping");
const basket = document.querySelector(".basket");
const marker = document.querySelector(".marker");

for (let i = 0; i < modalBuyLink.length; i++) {
    modalBuyLink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        basket.classList.add("add-goods");
        buyPopup.classList.add("modal-show");
    });
    modalMarkerLink[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        marker.classList.add("add-goods");
    });
}

continueShopping.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
});

modalBuyClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    buyPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.key === "Esc" || evt.key === "Escape") {
        if (buyPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            buyPopup.classList.remove("modal-show");
        }
    }
});