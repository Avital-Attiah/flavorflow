import { buildPrompt } from "../utils/promptBuilder.js";
import { askGemini } from "../services/gemini.service.js";

export async function generateRecipe(req, res) {
  try {
    const prompt = buildPrompt(req.body);
    const aiRecipe = await askGemini(prompt);
    res.json(aiRecipe);
  } catch (err) {
    console.error("AI ERROR:", err);
    res.status(500).json({ error: "AI failed" });
  }
}
