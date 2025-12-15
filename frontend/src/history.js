// שמירת מתכון אחד בהיסטוריה
export function saveRecipeToHistory(recipe) {
  let history = JSON.parse(localStorage.getItem("recipeHistory")) || [];

  history.unshift({
    id: Date.now(),
    name: recipe.name,
    fullRecipe: recipe,
  });

  localStorage.setItem("recipeHistory", JSON.stringify(history));
}

// קבלת כל ההיסטוריה
export function getRecipeHistory() {
  return JSON.parse(localStorage.getItem("recipeHistory")) || [];
}
