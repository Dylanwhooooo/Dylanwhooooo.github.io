const colorThemes = document.querySelectorAll('[name="theme"]');

// Store theme in localStorage
const storeTheme = function (theme) {
  localStorage.setItem("theme", theme);
};

// Set theme when the page loads
const setTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  if (activeTheme) {
    colorThemes.forEach((themeOption) => {
      if (themeOption.id === activeTheme) {
        themeOption.checked = true;
      }
    });
    // Apply the theme class to the document element
    document.documentElement.className = activeTheme;
  }
};

// Add event listeners to theme options
colorThemes.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
    // Apply the theme class to the document element
    document.documentElement.className = themeOption.id;
  });
});

// Set the theme when the page loads
window.addEventListener("load", setTheme);