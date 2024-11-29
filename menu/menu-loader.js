// Log a message when the script is loaded
console.log('Menu loader script has been successfully loaded.');
// Load the menu dynamically
window.addEventListener('DOMContentLoaded', () => {
  fetch('menu.html')
    .then((response) => response.text())
    .then((html) => {
      const placeholder = document.getElementById('menu-placeholder');
      placeholder.innerHTML = html;

      // Activate menu functionality
      const menuIcon = document.getElementById('menu-icon');
      const menuItems = document.getElementById('menu-items');
      const closeMenu = document.getElementById('close-menu');

      menuIcon.addEventListener('click', () => {
        menuItems.hidden = !menuItems.hidden;
        menuItems.style.display = menuItems.hidden ? 'none' : 'block';
        menuIcon.style.transform = menuItems.hidden ? 'translateY(0)' : 'translateY(-2px)';
      });

      closeMenu.addEventListener('click', () => {
        menuItems.hidden = true;
        menuItems.style.display = 'none';
        menuIcon.style.transform = 'translateY(0)';
      });
    })
    .catch((err) => console.error('Error loading menu:', err));
});
