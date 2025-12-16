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
import { saveRecipeToHistory } from "../history"; // שימי לב לשם!

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
    <div>
      <h1>FlavorFlow</h1>
      <p>Step {stepIndex + 1} of {steps.length}</p>

      <CurrentStep data={formData} setData={setFormData} />

      <div style={{ marginTop: 20 }}>
        {stepIndex > 0 && <button onClick={prev}>Back</button>}

        {stepIndex < steps.length - 1 && (
          <button onClick={next} style={{ marginLeft: 8 }}>
            Next
          </button>
        )}

        {stepIndex === steps.length - 1 && (
          <button onClick={submit} style={{ marginLeft: 8 }}>
            Generate Recipe
          </button>
        )}
      </div>
    </div>
  );
}
