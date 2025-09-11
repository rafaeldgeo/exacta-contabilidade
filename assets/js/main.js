// initialize the AOS Animate On Scroll Library
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    once: true,
    disable: () => window.innerWidth < 768
  });
});