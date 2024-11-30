document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle the sidebar and tab visibility
    const toggleMenu = () => {
        const sidebar = document.getElementById('sidebar');
        const tab = document.getElementById('tab');
        
        if (sidebar && tab) {
            console.log('Toggling menu...');
            sidebar.classList.toggle('open');
            if (sidebar.classList.contains('open')) {
                tab.style.display = 'none';  // Hide the tab when the sidebar is open
            } else {
                tab.style.display = 'block';  // Show the tab when the sidebar is closed
            }
        } else {
            console.error('Sidebar or tab is missing.');
        }
    };

    // Ensure the tab element exists before attaching the event listener
    const tab = document.getElementById('tab');
    if (tab) {
        tab.addEventListener('click', toggleMenu);
    } else {
        console.error('Failed to initialize the tab: tab element not found.');
    }
});
