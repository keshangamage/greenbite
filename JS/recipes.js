const recipes = [
  {
    title: "Avocado Salad",
    description: "A refreshing salad packed with healthy fats.",
    image: "assets/avocado-salad.webp",
    category: "salad",
    tags: ["healthy", "fresh", "vegetarian", "lunch"],
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
    category: "protein",
    tags: ["high-protein", "muscle-building", "dinner", "lunch"],
    ingredients: ["200g Chicken breast", "Salt", "Pepper", "Olive oil"],
    steps: ["Marinate chicken", "Grill for 6-8 minutes each side", "Serve hot"],
    nutrition: { Calories: "300", Protein: "35g", Carbs: "2g", Fat: "15g" },
  },
  {
    title: "Green Smoothie Bowl",
    description: "Nutrient-packed breakfast bowl with fresh fruits.",
    image: "assets/green-smoothie-bowl.webp",
    category: "smoothie",
    tags: ["breakfast", "energizing", "antioxidants", "vegan"],
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
  {
    title: "Quinoa Power Salad",
    description: "Protein-rich superfood salad for sustained energy.",
    image: "assets/avocado-salad.webp",
    category: "salad",
    tags: ["protein", "superfood", "lunch", "dinner"],
    ingredients: [
      "1 Cup Quinoa",
      "Mixed greens",
      "Cherry tomatoes",
      "Feta cheese",
      "Lemon dressing",
    ],
    steps: [
      "Cook quinoa according to package instructions",
      "Let quinoa cool completely",
      "Mix with greens and tomatoes",
      "Add feta and dressing",
      "Toss and serve",
    ],
    nutrition: { Calories: "380", Protein: "15g", Carbs: "45g", Fat: "12g" },
  },
  {
    title: "Berry Protein Smoothie",
    description: "Post-workout smoothie loaded with antioxidants.",
    image: "assets/green-smoothie-bowl.webp",
    category: "smoothie",
    tags: ["breakfast", "post-workout", "protein", "antioxidants"],
    ingredients: [
      "1 Cup Mixed berries",
      "Protein powder",
      "Greek yogurt",
      "Almond milk",
      "Honey",
    ],
    steps: [
      "Add all ingredients to blender",
      "Blend until smooth",
      "Add ice if desired consistency",
      "Pour into glass and serve",
    ],
    nutrition: { Calories: "280", Protein: "25g", Carbs: "28g", Fat: "6g" },
  },
  {
    title: "Salmon Teriyaki",
    description: "Omega-3 rich salmon with Asian flavors.",
    image: "assets/grilled-chicken.webp",
    category: "protein",
    tags: ["omega-3", "dinner", "asian", "healthy-fats"],
    ingredients: [
      "200g Salmon fillet",
      "Teriyaki sauce",
      "Sesame seeds",
      "Green onions",
      "Brown rice",
    ],
    steps: [
      "Marinate salmon in teriyaki sauce",
      "Grill salmon for 4-5 minutes each side",
      "Sprinkle with sesame seeds",
      "Serve over brown rice",
      "Garnish with green onions",
    ],
    nutrition: { Calories: "420", Protein: "35g", Carbs: "25g", Fat: "22g" },
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
const filterBtns = document.querySelectorAll(".filter-btn");

let currentCategory = "all";
let currentSearchTerm = "";

//filter function
function filterRecipes() {
  let filtered = [];

  for (let i = 0; i < recipes.length; i++) {
    let recipe = recipes[i];
    let showRecipe = true;

    // Check category filter
    if (currentCategory !== "all" && recipe.category !== currentCategory) {
      showRecipe = false;
    }

    // Check search term
    if (currentSearchTerm !== "") {
      let searchText = currentSearchTerm.toLowerCase();
      let recipeTitle = recipe.title.toLowerCase();

      if (!recipeTitle.includes(searchText)) {
        showRecipe = false;
      }
    }

    if (showRecipe) {
      filtered.push(recipe);
    }
  }

  displayRecipes(filtered);
}

//function to display recipes
function displayRecipes(list) {
  container.innerHTML = "";

  // Check if no recipes found
  if (list.length === 0) {
    container.innerHTML = "<p>No recipes found</p>";
    return;
  }

  // Create a card for each recipe
  for (let i = 0; i < list.length; i++) {
    let recipe = list[i];

    let card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="card-content">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
        <div class="recipe-tags">
          <span class="tag">${recipe.tags[0]}</span>
          <span class="tag">${recipe.tags[1]}</span>
        </div>
        <div class="card-footer">
          <span class="difficulty">Easy</span>
          <span class="time">15 min</span>
        </div>
      </div>
    `;

    // Add click event to open modal
    card.onclick = function () {
      openModal(recipe);
    };

    container.appendChild(card);
  }
}

//function to open modal
function openModal(recipe) {
  modal.style.display = "block";
  modalTitle.textContent = recipe.title;
  modalImage.src = recipe.image;
  modalDescription.textContent = recipe.description;

  // Show ingredients list
  modalIngredients.innerHTML = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    modalIngredients.innerHTML += "<li>" + recipe.ingredients[i] + "</li>";
  }

  // Show steps list
  modalSteps.innerHTML = "";
  for (let i = 0; i < recipe.steps.length; i++) {
    modalSteps.innerHTML += "<li>" + recipe.steps[i] + "</li>";
  }

  // Show nutrition info
  modalNutrition.innerHTML = `
    <tr><th>Calories</th><td>${recipe.nutrition.Calories}</td></tr>
    <tr><th>Protein</th><td>${recipe.nutrition.Protein}</td></tr>
    <tr><th>Carbs</th><td>${recipe.nutrition.Carbs}</td></tr>
    <tr><th>Fat</th><td>${recipe.nutrition.Fat}</td></tr>
  `;
}

// Close modal when X is clicked
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// Search functionality
searchBar.addEventListener("input", function (e) {
  currentSearchTerm = e.target.value;
  filterRecipes();
});

//category filter functionality
for (let i = 0; i < filterBtns.length; i++) {
  filterBtns[i].addEventListener("click", function (e) {
    for (let j = 0; j < filterBtns.length; j++) {
      filterBtns[j].classList.remove("active");
    }

    e.target.classList.add("active");

    // Set current category
    currentCategory = e.target.dataset.category;

    filterRecipes();
  });
}

//function to clear all filters
function clearFilters() {
  currentCategory = "all";
  currentSearchTerm = "";
  searchBar.value = "";

  for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].classList.remove("active");
  }

  document.querySelector('[data-category="all"]').classList.add("active");

  displayRecipes(recipes);
}

// Show recipes when page loads
displayRecipes(recipes);
