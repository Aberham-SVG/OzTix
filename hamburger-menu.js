console.log('Script loaded!'); // Debugging message to ensure the script is running

function toggleMenu() {
  console.log('Toggle menu triggered!'); // Debugging message for function execution
  const sidebar = document.getElementById('menu-sidebar');
  if (sidebar) {
    sidebar.classList.toggle('active'); // Toggle the "active" class
  } else {
    console.error('Sidebar not found!'); // Debugging message if sidebar element is missing
  }
}

// Attach the event listener after ensuring the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu-icon');
  if (menuIcon) {
    console.log('Menu icon found!'); // Debugging message for element detection
    menuIcon.addEventListener('click', toggleMenu); // Attach the click event listener
  } else {
    console.error('Menu icon not found!'); // Debugging message if menu icon is missing
  }
});
