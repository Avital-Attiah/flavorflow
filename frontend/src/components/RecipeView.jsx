// frontend/src/components/RecipeView.jsx
import { useState } from "react";
import { getSubstitutes } from "../api";

export default function RecipeView({ recipe, onChooseAgain }) {
  const [missing, setMissing] = useState([]);   // indices of missing ingredients
  const [subs, setSubs] = useState(null);       // substitutions from Gemini
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!recipe) return null;

  const toggleMissing = (index) => {
    // whenever user changes selection, clear old substitutes
    setSubs(null);
    setError("");
    setMissing((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleFindSubstitutes = async () => {
    if (missing.length === 0) return;

    const missingIngredients = missing.map((i) => recipe.ingredients[i]);

    try {
      setLoading(true);
      setError("");

      const res = await getSubstitutes({
        recipe: {
          name: recipe.name,
          ingredients: recipe.ingredients,
          steps: recipe.steps,
        },
        missingIngredients,
      });

      // backend now returns: { substitutions: [ { original, substitute, isCritical } ] }
      setSubs(res.data.substitutions || []);
    } catch (err) {
      console.error("Failed to get substitutes:", err);
      setError("Could not fetch substitutes right now, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChooseAgain = () => {
    setMissing([]);
    setSubs(null);
    setError("");
    if (onChooseAgain) onChooseAgain();
  };

  return (
    <div style={{ marginTop: 20, maxWidth: "700px" }}>
      <h2>{recipe.name}</h2>

      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients?.map((ingredient, index) => (
          <li key={index} style={{ marginBottom: 4 }}>
            <label style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={missing.includes(index)}
                onChange={() => toggleMissing(index)}
                style={{ marginRight: 8 }}
              />
              {ingredient}
            </label>
          </li>
        ))}
      </ul>

      {recipe.ingredients?.length > 0 && (
        <div style={{ marginTop: 10, marginBottom: 10 }}>
          <button
            onClick={handleFindSubstitutes}
            disabled={missing.length === 0 || loading}
          >
            {loading
              ? "Finding substitutes..."
              : missing.length === 0
              ? "Select missing ingredients"
              : "Find substitutes for missing ingredients"}
          </button>

          {error && (
            <p style={{ color: "red", marginTop: 8 }}>
              {error}
            </p>
          )}
        </div>
      )}

      {/* ⬇️ This part is adapted to the NEW backend response */}
      {subs && subs.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h4>Suggested substitutes:</h4>
          <ul>
            {subs.map((s, idx) => (
              <li key={idx} style={{ marginBottom: 6 }}>
                <strong>{s.original}:</strong>{" "}
                {s.substitute && !s.isCritical
                  ? `You can replace it with: ${s.substitute}`
                  : "This ingredient is critical. Please use another recipe or adjust the dish."}
              </li>
            ))}
          </ul>
        </div>
      )}

      <h3>Steps:</h3>
      <ol>
        {recipe.steps?.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ol>

      <button onClick={handleChooseAgain} style={{ marginTop: 20 }}>
        Choose again
      </button>
    </div>
  );
}
