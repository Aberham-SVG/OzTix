document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('menu-placeholder');
    if (placeholder) {
        placeholder.innerHTML = `
            <div id="hamburger-icon" onclick="toggleMenu()">☰</div>
            <div id="sidebar">
                <button id="close-btn" onclick="toggleMenu()">Close ×</button>
                <ul>
                    <li><a href="#">Open Tickets</a></li>
                    <li><a href="#">Resolved Tickets</a></li>
                    <li><a href="#">Manage & Add Users</a></li>
                </ul>
            </div>
        `;
    } else {
        console.warn('Menu placeholder not found.');
    }

    // Attach event listener for the icon
    const icon = document.getElementById('hamburger-icon');
    const sidebar = document.getElementById('sidebar');

    if (icon && sidebar) {
        icon.addEventListener('click', toggleMenu);
    } else {
        console.error('Hamburger icon or sidebar not found.');
    }
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const icon = document.getElementById('hamburger-icon');

    if (sidebar && icon) {
        console.log('Toggling menu...');
        sidebar.classList.toggle('open');
        icon.classList.toggle('move');
    } else {
        console.error('Sidebar or icon is missing.');
    }
}
