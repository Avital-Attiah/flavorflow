export default function RecipeView({ recipe, setRecipe }) {
  if (!recipe) return null;

  return (
    <div style={{ marginTop: 20 }}>
      <h2>{recipe.name}</h2>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>

      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ol>

      <button onClick={() => setRecipe(null)} style={{ marginTop: 20 }}>
        Choose again
      </button>
    </div>
  );
}
