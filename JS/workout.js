const workouts = {
  arms: {
    none: ["Push-ups", "Tricep Dips", "Arm Circles"],
    dumbbells: ["Bicep Curls", "Shoulder Press", "Lateral Raises"],
  },
  legs: {
    none: ["Squats", "Lunges", "Wall Sit"],
    dumbbells: ["Goblet Squats", "Deadlifts", "Calf Raises"],
  },
  full: {
    none: ["Burpees", "Mountain Climbers", "Jumping Jacks"],
    dumbbells: ["Thrusters", "Renegade Rows", "Deadlifts + Press"],
  },
};

const form = document.getElementById("workout-form");
const workoutContainer = document.getElementById("workout-container");
const workoutPlanDiv = document.getElementById("workout-plan");
const exerciseName = document.getElementById("exercise-name");
const timeLeftSpan = document.getElementById("time-left");
const startBtn = document.getElementById("start-timer");
const resetBtn = document.getElementById("reset-timer");

let timerInterval;
let timeRemaining = 30;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const bodyPart = document.getElementById("body-part").value;
  const equipment = document.getElementById("equipment").value;

  if (!bodyPart || !equipment) {
    alert("Please select both body part and equipment!");
    return;
  }

  const exerciseList = workouts[bodyPart][equipment];
  const randomExercise =
    exerciseList[Math.floor(Math.random() * exerciseList.length)];

  workoutPlanDiv.innerHTML = `
    <h2>Your Workout Plan</h2>
    <div class="exercise">
      <h3>${randomExercise}</h3>
      <p>Duration: 30 seconds</p>
      <p>Get ready to work out!</p>
    </div>`;

  exerciseName.textContent = randomExercise;
  workoutContainer.classList.remove("hidden");
  resetTimer();
});

function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(function () {
    if (timeRemaining > 0) {
      timeRemaining--;
      timeLeftSpan.textContent = timeRemaining;
    } else {
      clearInterval(timerInterval);
      alert("Time's up! Take a rest and move to the next exercise.");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timeRemaining = 30;
  timeLeftSpan.textContent = timeRemaining;
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
