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
window.addEventListener("load", loadTheme);

// circles background 
const visitedFlags = [
  "au",
  "cn",
  "jp",
  "nc",
  "sg",
  "my",
  "vu",
  "pg",
  "ph", 
  "hk",
]

const circlesContainer = document.querySelector(".circles-container");
const particles = [];
const SPEED_MULTIPLIER = 1;

// Update createParticleElement to accept a country name
function createParticleElement(country) {
  const img = document.createElement("img");
  // Replace spaces with hyphens if your file naming convention uses hyphens
  img.src = `./resources/flags/${country}.png`;
  
  // Set the image size and position styles
  img.style.width = "5%";
  img.style.height = "5%";
  img.style.position = "absolute";
  img.title = country;
  
  circlesContainer.appendChild(img);
  return img;
}

class Particle {
  constructor(el, speedX, speedY) {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.el = el;
    this.size = 35; // flag image size in pixels
    this.speedX = speedX * SPEED_MULTIPLIER;
    this.speedY = speedY * SPEED_MULTIPLIER;

    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }

  update() {
    // Update positions incrementally
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off the edges
    if (this.x + this.size > window.innerWidth || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y + this.size > window.innerHeight || this.y < 0) {
      this.speedY *= -1;
    }

    this.el.style.left = `${this.x}px`;
    this.el.style.top = `${this.y}px`;
  }
}

// Initialize particles: one for each visited flag
function init() {
  visitedFlags.forEach(country => {
    const speedX = Math.random() - 0.5;
    const speedY = Math.random() - 0.5;
    const imgElement = createParticleElement(country);
    particles.push(new Particle(imgElement, speedX, speedY));
  });
}

function animate() {
  particles.forEach(particle => {
    particle.update();
  });
  requestAnimationFrame(animate);
}

init();
animate();

// Optional: reposition particles on window resize
window.addEventListener("resize", () => {
  particles.forEach(particle => {
    particle.x = Math.random() * window.innerWidth;
    particle.y = Math.random() * window.innerHeight;
  });
});