// backend/controllers/recipe.controller.js
import { buildPrompt } from "../utils/promptBuilder.js";
import { askGemini } from "../services/gemini.service.js";
import { generateDishImage } from "../services/image.service.js";






export async function generateRecipe(req, res) {
  try {
    const prompt = buildPrompt(req.body);
    const recipe = await askGemini(prompt);

    // ✨ תמונה – אופציונלי
    if (process.env.GEMINI_API_KEY) {
      try {
        const imagePrompt = `
A professional food photograph of:
${recipe.name}
Clean white plate, natural light, high quality, realistic.
`;
        recipe.image = await generateDishImage(imagePrompt);
      } catch {
        recipe.image = null;
      }
    } else {
      recipe.image = null;
    }

    res.json(recipe);
  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ error: "AI failed" });
  }
}




// פונקציה חדשה – הצעת תחליפים למרכיבים חסרים
export async function suggestSubstitutes(req, res) {
  try {
    const { recipe, missingIngredients } = req.body;

    // נוודא שיש נתונים בסיסיים
    if (!recipe || !Array.isArray(recipe.ingredients) || !Array.isArray(missingIngredients)) {
      return res.status(400).json({ error: "Bad request – missing recipe or ingredients" });
    }

    const prompt = `
You are a cooking assistant.

The user is missing some ingredients from a recipe.
For every missing ingredient, return one of the following:
- A simple replacement (1 short phrase)
- Or null if the ingredient is essential and cannot be replaced

Return ONLY valid JSON (no markdown, no backticks) with this exact structure:

{
  "substitutions": [
    {
      "original": "...",
      "substitute": "... or null",
      "isCritical": true or false
    }
  ]
}

Rules:
- If substitute is null → isCritical must be true.
- If a substitute exists → isCritical must be false.
- Keep answers very short.
- Do NOT explain anything outside the JSON.

Recipe name:
${recipe.name || ""}

Ingredients list:
${recipe.ingredients.join("\n")}

Missing ingredients:
${missingIngredients.join("\n")}
`;


    const result = await askGemini(prompt);
    res.json(result);
  } catch (err) {
    console.error("AI ERROR (substitutes):", err);
    res.status(500).json({ error: "AI substitutes failed" });
  }
}
