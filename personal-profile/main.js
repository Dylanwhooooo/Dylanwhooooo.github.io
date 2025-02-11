const colourThemes = document.querySelectorAll('[name="theme"]');

// Store the selected theme in localStorage
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// Apply the selected theme to the page
const applyTheme = function (theme) {
  document.documentElement.className = theme; // Apply the theme class to the <html> element
};

// Load the saved theme when the page loads
const loadTheme = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    // Check the corresponding radio button
    colourThemes.forEach((themeOption) => {
      if (themeOption.id === savedTheme) {
        themeOption.checked = true;
      }
    });
    // Apply the saved theme
    applyTheme(savedTheme);
  }
};

// Add event listeners to theme options
colourThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id); // Save the selected theme
    applyTheme(themeOption.id); // Apply the selected theme
  });
});

// Load the saved theme when the page loads
window.addEventListener("load", loadTheme);