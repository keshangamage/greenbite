// Hamburger menu
(function initHamburgerMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!hamburger || !navMenu) return;

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

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
})();

document.getElementById("calcForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById("age").value);
  const gender = document.getElementById("gender").value;
  const height = parseInt(document.getElementById("height").value);
  const weight = parseInt(document.getElementById("weight").value);
  const activity = parseFloat(document.getElementById("activity").value);

  if (!age || !gender || !height || !weight || !activity) {
    alert("Please fill in all fields");
    return;
  }

  let bmr;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = bmr * activity;

  const carbs = (tdee * 0.5) / 4;
  const protein = (tdee * 0.2) / 4;
  const fat = (tdee * 0.3) / 9;

  // Display results
  document.getElementById("bmr").textContent = Math.round(bmr);
  document.getElementById("tdee").textContent = Math.round(tdee);
  document.getElementById("carbs").textContent = Math.round(carbs) + "g";
  document.getElementById("protein").textContent = Math.round(protein) + "g";
  document.getElementById("fat").textContent = Math.round(fat) + "g";

  document.getElementById("results").style.display = "block";
});
