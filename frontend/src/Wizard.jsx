import { useState } from "react";
import { generateRecipe } from "./api";

import StepCategories from "./components/Steps/StepCategories";
import StepStyle from "./components/Steps/StepStyle";
import StepTimeOfDay from "./components/Steps/StepTimeOfDay";
import StepAudience from "./components/Steps/StepAudience";
import StepPrepTime from "./components/Steps/StepPrepTime";
import StepDifficulty from "./components/Steps/StepDifficulty";
import StepDiet from "./components/Steps/StepDiet";
import StepServings from "./components/Steps/StepServings";

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

  const next = () => setStepIndex(stepIndex + 1);
  const prev = () => setStepIndex(stepIndex - 1);

  const submit = async () => {
    const res = await generateRecipe(formData);
    setRecipe(res.data);
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
