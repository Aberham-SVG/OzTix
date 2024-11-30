function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const icon = document.getElementById('hamburger-icon');
  
  // Toggle open class on sidebar
  sidebar.classList.toggle('open');
  
  // Toggle move class on icon
  icon.classList.toggle('move');
}
