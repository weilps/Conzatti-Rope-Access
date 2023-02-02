// Get the nav menu and the button
var nav = document.querySelector('nav');
var button = document.querySelector('.nav-button');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Toggle the 'open' class on the nav menu
  nav.classList.toggle('open');
});