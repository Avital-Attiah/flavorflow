// frontend/src/components/Wizard.jsx
import { useState } from "react";
import { generateRecipe } from "../api";

import StepCategories from "./Steps/StepCategories";
import StepStyle from "./Steps/StepStyle";
import StepTimeOfDay from "./Steps/StepTimeOfDay";
import StepAudience from "./Steps/StepAudience";
import StepPrepTime from "./Steps/StepPrepTime";
import StepDifficulty from "./Steps/StepDifficulty";
import StepDiet from "./Steps/StepDiet";
import StepServings from "./Steps/StepServings";
import { saveRecipeToHistory } from "../history";
import "../styles/theme.css";
import "../styles/wizard.css";
import "../styles/Buttons.css";
import "../styles/GenerateButton.css";
import "../styles/progress.css";


const steps = [
  StepCategories,
  StepStyle,
  StepTimeOfDay,
  StepAudience,
  StepPrepTime,
  StepDifficulty,
  StepDiet,
  StepServings,
];

export default function Wizard({ setRecipe }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    categories: [],
    style: null,
    timeOfDay: null,
    audience: null,
    prepTime: null,
    difficulty: null,
    diet: [],
    servings: 2,
  });

  const CurrentStep = steps[stepIndex];

  const next = () => setStepIndex((i) => i + 1);
  const prev = () => setStepIndex((i) => i - 1);

  const submit = async () => {
    try {
      const res = await generateRecipe(formData);

      // שמירה בהיסטוריה
      saveRecipeToHistory(res.data);

      // הצגת המתכון על המסך + טריגר לריענון הסיידבר (בא App.jsx)
      setRecipe(res.data);
    } catch (err) {
      console.error("Error generating recipe:", err);
      alert("משהו השתבש ביצירת המתכון 😕 נסי שוב עוד מעט.");
    }
  };

  return (
    <div className="wizard-container">
      <div className="wizard-card">

        {/* כותרת */}
        <h1 style={{ marginBottom: 8 }}>🍽️ FlavorFlow</h1>
        <p style={{ color: "var(--muted)", marginBottom: 24 }}>
          שלב {stepIndex + 1} מתוך {steps.length}
        </p>
        <div className="progress-wrapper">
          <div
            className="progress-bar"
            style={{
              width: `${((stepIndex + 1) / steps.length) * 100}%`,
            }}
          />
        </div>

        {/* תוכן השלב */}
        <CurrentStep data={formData} setData={setFormData} />

        {/* כפתורי ניווט */}
        <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between" }}>
          {stepIndex > 0 ? (
            <button className="option-button" onClick={prev}>
              ← חזרה
            </button>
          ) : <div />}

          {stepIndex < steps.length - 1 && (
            <button className="generate-btn" onClick={next}>
              המשך →
            </button>
          )}

          {stepIndex === steps.length - 1 && (
            <button className="generate-btn" onClick={submit}>
              ✨ צור מתכון
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
