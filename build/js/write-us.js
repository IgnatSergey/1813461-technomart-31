const writeUsLink = document.querySelector(".button-write-us");
const writeUsPopup = document.querySelector(".modal-write-us");
const modalClose = writeUsPopup.querySelector(".modal-close");
const writeUsEmail = writeUsPopup.querySelector(".write-us-email");
const writeUsText = writeUsPopup.querySelector(".write-us-text");
const writeUsForm = writeUsPopup.querySelector(".write-us-form");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

writeUsLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-show");
    if (storage) {
        writeUsEmail.value = storage;
        writeUsText.focus();
    } else {
        writeUsEmail.focus();
    }
});

modalClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-show");
    writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function(evt) {
    if (!writeUsEmail.value || !writeUsText.value) {
        evt.preventDefault();
        writeUsPopup.classList.remove("modal-error");
        writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
        writeUsPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("email", writeUsEmail.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.key === "Esc" || evt.key === "Escape") {
        if (writeUsPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            writeUsPopup.classList.remove("modal-show");
            writeUsPopup.classList.remove("modal-error");
        }
    }
});