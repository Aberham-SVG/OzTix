function toggleMenu() {
  const sidebar = document.getElementById('menu-sidebar');
  const isOpen = sidebar.style.left === '0px';
  sidebar.style.left = isOpen ? '-250px' : '0px';
}
