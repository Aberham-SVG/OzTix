document.addEventListener('DOMContentLoaded', () => {
    // Find the placeholder where the menu will be inserted
    const placeholder = document.getElementById('menu-placeholder');

    if (placeholder) {
        // Dynamically inject the menu HTML
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
        console.warn('Menu placeholder not found. Hamburger menu will not be added.');
        return; // Exit if no placeholder
    }

    // Attach event listeners for the menu
    const icon = document.getElementById('hamburger-icon');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    if (icon && sidebar && closeBtn) {
        icon.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
    } else {
        console.error('Failed to initialize the hamburger menu.');
    }
});

// Function to toggle the menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const icon = document.getElementById('hamburger-icon');

    if (sidebar && icon) {
        sidebar.classList.toggle('open');
        icon.classList.toggle('move');
    }
}
