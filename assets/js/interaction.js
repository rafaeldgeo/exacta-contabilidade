"use strict";

const html = document.querySelector("html");
const body = document.querySelector("body");
const divMain = document.querySelector(".main");
const spanYear = document.querySelector(".credits__year");
const divContainer = document.querySelector(".container");
const divModal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn");
const btnClose = document.querySelector(".modal__btn-close");

// get the current Year and place it in footer
const currentYear = new Date().getFullYear();
spanYear.textContent = currentYear;

// open modal
function openModal() {
    divModal.hidden = false;
    divModal.querySelector(".modal__content").focus();
    html.classList.add("no-scroll");
    body.classList.add("no-scroll");
    divContainer.classList.add("container--show-blur");
}

// close modal
function closeModal() {
    divModal.hidden = true;
    btnOpen.focus();
    html.classList.remove("no-scroll");
    body.classList.remove("no-scroll");
    divContainer.classList.remove("container--show-blur");
}

btnOpen.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);

// close the modal when click it
divModal.addEventListener("click", (e) => {
    if (e.target === divModal) {
        closeModal();
    };
});

// close the modal when push the Esc key
addEventListener("keydown", (e) => {
    if (divModal.hasAttribute("aria-hidden", false) && e.key === "Escape") {
        closeModal();
    }
});


