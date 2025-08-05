document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded");

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  console.log("hamburger:", hamburger);
  console.log("nav:", nav);

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      console.log("Hamburger clicked");
      hamburger.classList.toggle("hamburger--open");
      nav.classList.toggle("nav--open");
    });
  } else {
    console.warn("Elements not found");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("nav script loaded"); // Debugging log
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav");

  if (hamburger && nav) {
   hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger--open");
    nav.classList.toggle("nav--open");
    });
 }
});