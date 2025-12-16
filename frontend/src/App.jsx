// frontend/src/App.jsx
import { useState } from "react";
import Wizard from "./components/Wizard";
import HistorySidebar from "./components/HistorySidebar";
import RecipeView from "./components/RecipeView";

function App() {
  const [recipe, setRecipe] = useState(null);
  const [historyKey, setHistoryKey] = useState(0);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <HistorySidebar key={historyKey} onSelect={setRecipe} />

      <main style={{ flex: 1, padding: 24, marginLeft: "260px" }}>
        <Wizard
          setRecipe={(r) => {
            setRecipe(r);
            setHistoryKey((k) => k + 1); // רענון סיידבר
          }}
        />

        {recipe && (
          <RecipeView
            recipe={recipe}
            onChooseAgain={() => setRecipe(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;
