const breathingText = document.getElementById("breathing-text");

const breathingCycle = ["Breathe In", "Hold", "Breathe Out", "Hold"];
let currentStep = 0;

setInterval(function () {
  breathingText.textContent = breathingCycle[currentStep];
  currentStep = (currentStep + 1) % 4;
}, 2000);

const timeDisplay = document.getElementById("time-left");
const startButton = document.getElementById("start-timer");
const resetButton = document.getElementById("reset-timer");
const completedDisplay = document.getElementById("completed");

let timerInterval;
let timeRemaining = 60;

let completedSessions = localStorage.getItem("completedSessions") || 0;
completedDisplay.textContent = completedSessions;

// Start Timer function
function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    if (timeRemaining > 0) {
      timeRemaining--;
      timeDisplay.textContent = timeRemaining;
    } else {
      clearInterval(timerInterval);
      alert("Meditation session complete!");

      completedSessions++;
      localStorage.setItem("completedSessions", completedSessions);
      completedDisplay.textContent = completedSessions;

      resetTimer();
    }
  }, 1000);
}

// Reset timer function
function resetTimer() {
  clearInterval(timerInterval);
  timeRemaining = 60;
  timeDisplay.textContent = timeRemaining;
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

const playButton = document.getElementById("play-sound");
const stopButton = document.getElementById("stop-sound");

const backgroundAudio = new Audio(
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
);

// Play sound function
playButton.addEventListener("click", function () {
  backgroundAudio.loop = true;
  backgroundAudio.play();
});

// Stop sound function
stopButton.addEventListener("click", function () {
  backgroundAudio.pause();
  backgroundAudio.currentTime = 0;
});

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
