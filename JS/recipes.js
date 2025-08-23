const recipes = [
  {
    title: "Avocado Salad",
    description:
      "Fresh avocado salad with cucumber, tomato, olive oil, healthy and delicious.",
    image: "assets/avocado-salad.webp",
    category: "salad",

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
    description:
      "Juicy grilled chicken breast seasoned perfectly, tender inside, smoky outside.",
    image: "assets/grilled-chicken.webp",
    category: "protein",

    ingredients: ["200g Chicken breast", "Salt", "Pepper", "Olive oil"],
    steps: ["Marinate chicken", "Grill for 6-8 minutes each side", "Serve hot"],
    nutrition: { Calories: "300", Protein: "35g", Carbs: "2g", Fat: "15g" },
  },
  {
    title: "Green Smoothie Bowl",
    description:
      "Nutritious green smoothie bowl topped with fruits, seeds, and nuts.",
    image: "assets/green-smoothie-bowl.webp",
    category: "smoothie",

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
    description:
      "Protein-rich quinoa salad with veggies, herbs, and light zesty dressing.",
    image: "assets/quinoa-power-salad.webp",
    category: "salad",

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
    description:
      "Refreshing smoothie with mixed berries, protein boost, creamy and energizing.",
    image: "assets/berry-protein-smoothie.webp",
    category: "smoothie",

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
    description:
      "Glazed salmon fillet with teriyaki sauce, savory, sweet, healthy dish.",
    image: "assets/salmon-teriyaki.webp",
    category: "protein",

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

  {
    title: "Oatmeal with Berries",
    description:
      "Wholesome oatmeal topped with fresh berries, nuts, honey, healthy and energizing.",
    image: "assets/oatmeal-berries.webp",
    category: "breakfast",

    ingredients: [
      "1 cup rolled oats",
      "2 cups milk or water",
      "1/2 cup mixed berries",
      "1 tbsp honey",
      "Handful of nuts",
    ],
    steps: [
      "Cook oats in milk or water until soft",
      "Spoon into a bowl",
      "Top with berries and nuts",
      "Drizzle honey before serving",
    ],
    nutrition: { Calories: "320", Protein: "9g", Carbs: "55g", Fat: "8g" },
  },

  {
    title: "Greek Yogurt Parfait",
    description:
      "Creamy Greek yogurt layered with granola, fresh fruits, healthy and energizing start.",
    image: "assets/greek-yogurt-parfait.webp",
    category: "breakfast",
    ingredients: [
      "1 cup Greek yogurt",
      "1/2 cup granola",
      "1/2 cup mixed berries",
      "1 tbsp honey",
    ],
    steps: [
      "Spoon Greek yogurt into a bowl or glass",
      "Layer with granola and berries",
      "Drizzle honey on top",
      "Serve immediately",
    ],
    nutrition: { Calories: "300", Protein: "15g", Carbs: "40g", Fat: "8g" },
  },

  {
    title: "Grilled Chicken Wrap",
    description:
      "Soft tortilla filled with grilled chicken, veggies, hummus, protein-packed healthy meal.",
    image: "assets/grilled-chicken-wrap.webp",
    category: "lunch",

    ingredients: [
      "1 tortilla wrap",
      "100g grilled chicken breast",
      "Lettuce",
      "Tomato slices",
      "2 tbsp hummus",
    ],
    steps: [
      "Grill chicken breast until cooked",
      "Warm tortilla wrap",
      "Spread hummus on tortilla",
      "Add chicken and veggies",
      "Roll tightly and serve",
    ],
    nutrition: { Calories: "400", Protein: "32g", Carbs: "35g", Fat: "14g" },
  },

  {
    title: "Mediterranean Chickpea Salad",
    description:
      "Colorful chickpea salad with veggies, olives, feta, light healthy satisfying lunch.",
    image: "assets/mediterranean-chickpea-salad.webp",
    category: "lunch",
    ingredients: [
      "1 cup chickpeas (cooked or canned)",
      "1/2 cup cherry tomatoes",
      "1/2 cucumber",
      "1/4 cup feta cheese",
      "Olives",
      "Olive oil",
      "Lemon juice",
      "Salt",
      "Pepper",
    ],
    steps: [
      "Chop tomatoes and cucumber",
      "Mix chickpeas, veggies, olives, and feta in a bowl",
      "Drizzle with olive oil and lemon juice",
      "Season with salt and pepper",
      "Toss gently and serve",
    ],
    nutrition: { Calories: "380", Protein: "15g", Carbs: "40g", Fat: "18g" },
  },

  {
    title: "Grilled Lemon Herb Chicken",
    description:
      "Juicy grilled chicken marinated with lemon and herbs, healthy and flavorful dinner.",
    image: "assets/grilled-lemon-herb-chicken.webp",
    category: "dinner",
    ingredients: [
      "2 chicken breasts",
      "1 lemon (juice and zest)",
      "1 tbsp olive oil",
      "1 tsp garlic powder",
      "1 tsp dried herbs",
      "Salt",
      "Pepper",
    ],
    steps: [
      "Mix lemon juice, zest, olive oil, garlic, herbs, salt, pepper",
      "Marinate chicken for at least 30 minutes",
      "Preheat grill or pan",
      "Grill chicken until cooked through and golden",
      "Serve hot with vegetables or salad",
    ],
    nutrition: { Calories: "430", Protein: "35g", Carbs: "5g", Fat: "28g" },
  },

  {
    title: "Baked Salmon with Veggies",
    description:
      "Tender baked salmon served with roasted vegetables, light, healthy, flavorful dinner option.",
    image: "assets/baked-salmon-veggies.webp",
    category: "dinner",

    ingredients: [
      "1 salmon fillet",
      "1 cup broccoli",
      "1 carrot",
      "1 zucchini",
      "Olive oil",
      "Salt",
      "Pepper",
    ],
    steps: [
      "Preheat oven to 180°C",
      "Season salmon with salt, pepper, olive oil",
      "Chop vegetables evenly",
      "Place salmon and veggies on tray",
      "Bake for 20 minutes",
    ],
    nutrition: { Calories: "450", Protein: "38g", Carbs: "20g", Fat: "22g" },
  },

  {
    title: "Stir-Fried Tofu and Veggies",
    description:
      "Crispy tofu stir-fried with colorful vegetables, light, healthy, and protein-rich dinner.",
    image: "assets/stir-fried-tofu-and-veggies.webp",
    category: "dinner",
    ingredients: [
      "200g firm tofu",
      "1 cup broccoli",
      "1 carrot",
      "1 bell pepper",
      "Soy sauce",
      "Olive oil",
      "Garlic",
    ],
    steps: [
      "Press and cube tofu",
      "Heat oil in pan, sauté garlic",
      "Add tofu, cook until golden",
      "Add vegetables, stir-fry until tender",
      "Season with soy sauce and serve",
    ],
    nutrition: { Calories: "400", Protein: "25g", Carbs: "30g", Fat: "18g" },
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
        <div class="category-badge">${recipe.category}</div>
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
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
