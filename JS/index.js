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

window.onload = function () {
  setInterval(changeSubtitle, 3000);
};
