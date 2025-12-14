import { useState } from "react";
import Wizard from "./Wizard";
import RecipeView from "./RecipeView";

function App() {
  const [recipe, setRecipe] = useState(null);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      {!recipe ? (
        <Wizard setRecipe={setRecipe} />
      ) : (
        <RecipeView recipe={recipe} setRecipe={setRecipe} />
      )}
    </div>
  );
}

export default App;
