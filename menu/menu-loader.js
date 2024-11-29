// Get the elements for the sidebar and hamburger button
const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const closeSidebarBtn = document.getElementById('close-sidebar');

// Toggle the sidebar when the hamburger button is clicked
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Close the sidebar when the close button is clicked
closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
});
