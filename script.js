// JavaScript to toggle the navigation menu on small screens
const toggleButton = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});
