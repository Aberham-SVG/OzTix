document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('menu-placeholder');
    
    if (placeholder) {
        placeholder.innerHTML = `
            <div id="hamburger-icon">☰</div>
            <div id="sidebar">
                <button id="close-btn">Close ×</button>
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

    // Function to toggle the menu
    const toggleMenu = () => {
        const sidebar = document.getElementById('sidebar');
        const icon = document.getElementById('hamburger-icon');
        if (sidebar && icon) {
            console.log('Toggling menu...');
            sidebar.classList.toggle('open');
            if (sidebar.classList.contains('open')) {
                icon.style.display = 'none';  // Hide the hamburger icon when the sidebar is open
            } else {
                icon.style.display = 'block';  // Show the hamburger icon when the sidebar is closed
            }
        } else {
            console.error('Sidebar or icon is missing.');
        }
    };

    // Attach event listeners
    const icon = document.getElementById('hamburger-icon');
    const sidebar = document.getElementById('sidebar');

    if (icon && sidebar) {
        icon.addEventListener('click', toggleMenu);
        const closeButton = document.getElementById('close-btn');
        if (closeButton) {
            closeButton.addEventListener('click', toggleMenu);
        }
    } else {
        console.error('Failed to initialize the hamburger menu.');
    }
});
