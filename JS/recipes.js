// Recipe data stored in JS object
const recipes = [
  {
    title: "Avocado Salad",
    description: "A refreshing salad packed with healthy fats.",
    image: "assets/avocado-salad.webp",
    ingredients: ["2 Avocados", "1 Tomato", "1 Cucumber", "Olive oil", "Salt"],
    steps: [
      "Chop veggies",
      "Mix in a bowl",
      "Drizzle olive oil",
      "Season with salt",
    ],
    nutrition: { Calories: "250", Protein: "4g", Carbs: "12g", Fat: "20g" },
  },
  {
    title: "Grilled Chicken",
    description: "Lean protein for muscle building.",
    image: "assets/grilled-chicken.webp",
    ingredients: ["200g Chicken breast", "Salt", "Pepper", "Olive oil"],
    steps: ["Marinate chicken", "Grill for 6-8 minutes each side", "Serve hot"],
    nutrition: { Calories: "300", Protein: "35g", Carbs: "2g", Fat: "15g" },
  },
  {
    title: "Green Smoothie Bowl",
    description: "Nutrient-packed breakfast bowl with fresh fruits.",
    image: "assets/green-smoothie-bowl.webp",
    ingredients: [
      "1 Banana",
      "1 Cup Spinach",
      "1/2 Avocado",
      "Coconut milk",
      "Berries",
      "Chia seeds",
    ],
    steps: [
      "Blend banana, spinach, and avocado with coconut milk",
      "Pour into bowl",
      "Top with berries and chia seeds",
      "Serve immediately",
    ],
    nutrition: { Calories: "320", Protein: "8g", Carbs: "45g", Fat: "12g" },
  },
];

// DOM Elements
const container = document.getElementById("recipesContainer");
const searchBar = document.getElementById("searchBar");
const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const modalNutrition = document.getElementById("modalNutrition");
const closeBtn = document.querySelector(".close");

// Render recipes
function displayRecipes(list) {
  container.innerHTML = "";
  list.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="card-content">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <div class="card-footer">
          <span class="difficulty">Easy</span>
          <span class="time">15 min</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openModal(recipe));
    container.appendChild(card);
  });
}

function openModal(recipe) {
  modal.style.display = "block";
  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;
  modalDescription.textContent = recipe.description;

  modalIngredients.innerHTML = recipe.ingredients
    .map((i) => `<li>${i}</li>`)
    .join("");
  modalSteps.innerHTML = recipe.steps.map((s) => `<li>${s}</li>`).join("");

  modalNutrition.innerHTML = `
    <tr><th>Calories</th><td>${recipe.nutrition.Calories}</td></tr>
    <tr><th>Protein</th><td>${recipe.nutrition.Protein}</td></tr>
    <tr><th>Carbs</th><td>${recipe.nutrition.Carbs}</td></tr>
    <tr><th>Fat</th><td>${recipe.nutrition.Fat}</td></tr>
  `;
}

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// Search filter
searchBar.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = recipes.filter((r) => r.title.toLowerCase().includes(value));
  displayRecipes(filtered);
});

// Initial load
displayRecipes(recipes);
