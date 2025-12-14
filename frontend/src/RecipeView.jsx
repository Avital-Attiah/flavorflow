export default function RecipeView({ recipe, setRecipe }) {
  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.explanation}</p>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      <h3>Steps:</h3>
      <ol>
        {recipe.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>

      <button onClick={() => setRecipe(null)}>Choose again</button>
    </div>
  );
}
