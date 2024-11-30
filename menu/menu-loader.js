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

        console.log('Menu injected into placeholder.');
    } else {
        console.warn('Menu placeholder not found.');
    }

    const icon = document.getElementById('hamburger-icon');
    if (icon) {
        icon.addEventListener('click', toggleMenu);
    } else {
        console.error('Hamburger icon not found.');
    }
});
