document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved theme preference
    const darkMode = localStorage.getItem('darkMode') === 'true';
    
    // Set initial mode
    if (darkMode) {
        body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
    });
});