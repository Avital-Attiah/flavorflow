import dotenv from "dotenv";
dotenv.config();

export async function askGemini(prompt) {
  console.log("Gemini is not connected yet. Prompt received:");
  console.log(prompt);

  return {
    name: "AI placeholder recipe",
    ingredients: ["Ingredient 1", "Ingredient 2"],
    steps: ["Step 1", "Step 2"],
    explanation: "This is a placeholder until Gemini integration."
  };
}
