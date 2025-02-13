const colourThemes = document.querySelectorAll('[name="theme"]');
console.log("YOOOOOOOOOOOOOOOOO");
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
window.addEventListener("load", loadTheme);

// Load the saved theme when the page loads
const dvdLogo = document.querySelector("svg");
const colors = ["red", "green", "blue", "yellow", "orange", "purple"]

function loop() {
  const hRange = window.innerWidth - dvdLogo.clientWidth;
  const vRange = window.innerHeight - dvdLogo.clientHeight;
  const time = performance.now() * 0.2;
  
  const x = Math.abs((time % (hRange * 2)) - hRange);
  dvdLogo.style.left = `${x}px`;
  const y = Math.abs((time % (vRange * 2)) - vRange);
  dvdLogo.style.top = `${y}px`;
  
  const bounces = Math.floor(time / hRange) + Math.floor(time / vRange);
  dvdLogo.style.fill = colors[bounces % colors.length];
  
  requestAnimationFrame(loop);
}
loop();
