document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const saveBtn = document.getElementById('saveBtn');
    const usernameInput = document.getElementById('username');
    const themeSelect = document.getElementById('theme');
    const animationBox = document.getElementById('animationBox');
    const greetingElement = document.getElementById('greeting');
    
    // Load saved preferences
    loadPreferences();
    
    // Save preferences to localStorage
    saveBtn.addEventListener('click', function() {
        const username = usernameInput.value.trim();
        const theme = themeSelect.value;
        
        // Save to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('theme', theme);
        
        // Apply theme immediately
        applyTheme(theme);
        
        // Show greeting if username exists
        if (username) {
            greetingElement.textContent = `Welcome back, ${username}!`;
            greetingElement.style.opacity = 1;
            
            // Trigger animation on save
            animationBox.classList.add('bounce');
            setTimeout(() => {
                animationBox.classList.remove('bounce');
            }, 1000);
        }
    });
    
    // Trigger animation on box click
    animationBox.addEventListener('click', function() {
        this.classList.add('rotate');
        setTimeout(() => {
            this.classList.remove('rotate');
        }, 2000);
    });
    
    // Load preferences from localStorage
    function loadPreferences() {
        const savedUsername = localStorage.getItem('username');
        const savedTheme = localStorage.getItem('theme');
        
        if (savedUsername) {
            usernameInput.value = savedUsername;
            greetingElement.textContent = `Welcome back, ${savedUsername}!`;
            greetingElement.style.opacity = 1;
        }
        
        if (savedTheme) {
            themeSelect.value = savedTheme;
            applyTheme(savedTheme);
        }
    }
    
    // Apply selected theme
    function applyTheme(theme) {
        // Remove all theme classes first
        document.body.classList.remove('light', 'dark', 'blue');
        
        // Add selected theme class
        if (theme) {
            document.body.classList.add(theme);
        }
    }
});