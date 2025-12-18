const KEY = "recipeHistory";

export function getRecipeHistory() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveRecipeToHistory(recipe) {
  const history = getRecipeHistory();

  history.unshift({
    id: Date.now(),
    name: recipe.name,
    fullRecipe: recipe,
    favorite: false,
  });

  localStorage.setItem(KEY, JSON.stringify(history));
}

export function deleteFromHistory(id) {
  const updated = getRecipeHistory().filter((r) => r.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}

export function toggleFavorite(id) {
  const updated = getRecipeHistory().map((r) =>
    r.id === id ? { ...r, favorite: !r.favorite } : r
  );
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}
