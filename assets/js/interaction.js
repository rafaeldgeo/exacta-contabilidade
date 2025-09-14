/* Projeto: One Page Exacta Contabilidade Empresarial Serra-ES | Design e Desenvolvimento: Rafael Dias de Almeida |  Ano: Setembro/2025 */
"use strict";

const html = document.querySelector("html");
const body = document.querySelector("body");
const divContainer = document.querySelector(".container");
const main = document.querySelector(".main");
const divModal = document.querySelector(".modal");
const btnOpen = document.querySelector(".btn");
const btnClose = document.querySelector(".modal__btn-close");
const spanYear = document.querySelector(".credits__year");

if (!html || !body || !divContainer || !divModal || !main || !btnOpen || !btnClose ) throw new Error ("Some element not found");

// get the current year and place it in the footer
const currentYear = new Date().getFullYear();
spanYear.textContent = currentYear;

// open modal
function openModal() {
    main.setAttribute("aria-hidden", "true");
    divModal.hidden = false;
    divModal.setAttribute("aria-modal", "true")
    trapFocus(divModal);
    btnClose.focus();
    html.classList.add("no-scroll");
    body.classList.add("no-scroll");
    divContainer.classList.add("container--show-blur");
}

// close modal
function closeModal() {
    main.setAttribute("aria-hidden", "false");
    divModal.hidden = true;
    divModal.removeAttribute("aria-modal");
    btnOpen.focus();
    html.classList.remove("no-scroll");
    body.classList.remove("no-scroll");
    divContainer.classList.remove("container--show-blur");
}

// focus trap
function trapFocus(container) {
    const focusAbleElements = container.querySelectorAll(".modal__btn-close, .link");
    if (focusAbleElements.length === 0) {
        console.warn("elements into the modal not found")
        return;
    }
    const firstElement = focusAbleElements[0];
    const lastElement = focusAbleElements[focusAbleElements.length - 1];

    container.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }); 
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
divModal.addEventListener("keydown", (e) => {
    if (!divModal.hidden && e.key === "Escape") {
        closeModal();

    }
});



