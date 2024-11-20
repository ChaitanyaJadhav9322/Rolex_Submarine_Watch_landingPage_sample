function toggleTheme() {
    const body = document.body;
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');
  
    // Toggle the dark-mode class on the body
    body.classList.toggle('dark-mode');
  
    // Toggle the visibility of the light and dark mode icons
    if (body.classList.contains('dark-mode')) {
      lightModeIcon.style.display = 'none';
      darkModeIcon.style.display = 'block';
    } else {
      lightModeIcon.style.display = 'block';
      darkModeIcon.style.display = 'none';
    }
}
