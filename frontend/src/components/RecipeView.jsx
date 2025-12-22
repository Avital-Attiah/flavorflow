// frontend/src/components/RecipeView.jsx
import { useState } from "react";
import { getSubstitutes } from "../api";

import "../styles/theme.css";
import "../styles/wizard.css";
import "../styles/Buttons.css";
import "../styles/GenerateButton.css";
import "../styles/recipe.css";

export default function RecipeView({ recipe, onChooseAgain }) {
  const [missing, setMissing] = useState([]);
  const [subs, setSubs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!recipe) return null;

  const toggleMissing = (index) => {
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
    <div className="recipe-container">
      <h2 className="recipe-title">🍽️ {recipe.name}</h2>

      {/* Ingredients */}
      <div className="recipe-section">
        <h3>🧂 Ingredients</h3>
        <ul className="recipe-ingredients">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>
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

        <div style={{ marginTop: 12 }}>
          <button
            onClick={handleFindSubstitutes}
            disabled={missing.length === 0 || loading}
          >
            {loading
              ? "Finding substitutes..."
              : missing.length === 0
                ? "Select missing ingredients"
                : "Find substitutes"}
          </button>

          {error && (
            <p style={{ color: "red", marginTop: 8 }}>{error}</p>
          )}
        </div>
      </div>

      {/* Substitutes */}
      {subs && subs.length > 0 && (
        <div className="substitutes-box">
          <h4>🔁 Suggested substitutes</h4>
          <ul>
            {subs.map((s, idx) => (
              <li key={idx}>
                <strong>{s.original}:</strong>{" "}
                {s.substitute && !s.isCritical
                  ? s.substitute
                  : "This ingredient is critical. Consider another recipe."}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Steps */}
      <div className="recipe-section">
        <h3>👩‍🍳 Steps</h3>
        <ol className="recipe-steps">
          {recipe.steps?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-image"
        />
      )}


      {/* Actions */}
      <div className="recipe-actions">
        <button onClick={handleChooseAgain}>
          🔄 Choose another recipe
        </button>
      </div>
    </div>
  );
}
