// frontend/src/App.jsx
import { useState } from "react";
import Wizard from "./components/Wizard";
import HistorySidebar from "./components/HistorySidebar";
import RecipeView from "./components/RecipeView";
import "./styles/theme.css";

function App() {
  const [recipe, setRecipe] = useState(null);
  const [historyKey, setHistoryKey] = useState(0);

  return (
    <div className="app-layout">
      <HistorySidebar key={historyKey} onSelect={setRecipe} />

      <div className="main-content">
        {!recipe && (
          <Wizard
            setRecipe={(r) => {
              setRecipe(r);
              setHistoryKey((k) => k + 1);
            }}
          />
        )}

        {recipe && (
          <RecipeView
            recipe={recipe}
            onChooseAgain={() => setRecipe(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
