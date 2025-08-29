const slogans = [
  "Your Journey to Vibrant Health Starts Here",
  "Nourish Your Body, Fuel Your Life",
  "Healthy Choices, Happy Living",
  "Transform Your Health, One Bite at a Time",
];

let index = 0;

// Function to change text
function changeSubtitle() {
  const subtitle = document.getElementById("rotating-subtitle");

  index = index + 1;
  if (index >= slogans.length) {
    index = 0;
  }

  subtitle.textContent = slogans[index];
}

// Hamburger menu
function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  }
}

window.onload = function () {
  setInterval(changeSubtitle, 3000);
  initHamburgerMenu();
};
