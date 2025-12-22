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
  const [isGenerating, setIsGenerating] = useState(false);

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

  const next = () => setStepIndex((i) => Math.min(i + 1, steps.length - 1));
  const prev = () => setStepIndex((i) => Math.max(i - 1, 0));

  const submit = async () => {
    try {
      setIsGenerating(true);

      const res = await generateRecipe(formData);

      saveRecipeToHistory(res.data);
      setRecipe(res.data);
    } catch (err) {
      console.error("Error generating recipe:", err);
      alert("משהו השתבש ביצירת המתכון 😕 נסי שוב עוד מעט.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      {isGenerating && (
        <div className="loading-overlay">
          <div className="loading-box">
            <div className="spinner" />
            <div className="loading-text">יוצר מתכון…</div>
            <div className="loading-subtext">זה יכול לקחת עד דקה</div>
          </div>
        </div>
      )}

      <div className="wizard-container">
        <div className="wizard-card">
        <h1 style={{ marginBottom: 4 }}>🍽️ FlavorFlow</h1>
<p style={{ color: "var(--muted)", marginBottom: 8 }}>
  שלב {stepIndex + 1} מתוך {steps.length}
</p>


          {/* 8 עיגולים במקום פס */}
          <div className="step-dots" aria-label="progress">
            {steps.map((_, idx) => {
              const cls =
                idx < stepIndex
                  ? "step-dot done"
                  : idx === stepIndex
                  ? "step-dot active"
                  : "step-dot";
              return <span key={idx} className={cls} />;
            })}
          </div>

          {/* תוכן השלב */}
         <div className="wizard-step-content">
  <CurrentStep data={formData} setData={setFormData} />
</div>


          {/* כפתורי ניווט */}
          <div className="wizard-actions">
            {stepIndex > 0 ? (
              <button className="option-button" onClick={prev} disabled={isGenerating}>
                ← חזרה
              </button>
            ) : (
              <div />
            )}

            {stepIndex < steps.length - 1 && (
              <button className="generate-btn" onClick={next} disabled={isGenerating}>
                המשך →
              </button>
            )}

            {stepIndex === steps.length - 1 && (
              <button className="generate-btn" onClick={submit} disabled={isGenerating}>
                {isGenerating ? "מכין מתכון..." : "✨ צור מתכון"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
