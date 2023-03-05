// Get the nav menu and the button
const bBButton = document.querySelector(".burger-bun");
const menu = document.querySelector(".menu");
const socialsH = document.getElementById("soc-header");

// Add a click event listener to the button
bBButton.addEventListener("click", () => {
  // Toggle the 'open' class on the nav menu
  menu.classList.toggle("open");
  socialsH.classList.toggle("open");
});
