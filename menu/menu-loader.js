// Get the menu and hamburger icon elements
const menu = document.getElementById('menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');

// Toggle menu open/close
hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('open'); // Open or close the sidebar
});
