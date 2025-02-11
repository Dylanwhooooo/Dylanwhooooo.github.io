

const colourThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function(theme) {
    localStorage.setItem("theme", theme); 
}

colorThemes.forEach(themeOption => {
    themeOption.addEventListener('click', () => {
        storeTheme(themeOption.id);
    });
});