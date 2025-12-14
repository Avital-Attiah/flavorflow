import { buildPrompt } from "../utils/promptBuilder.js";
// import { askGemini } from "../services/gemini.service.js"; // נשתמש אחר כך

export async function generateRecipe(req, res) {
  try {
    const data = req.body;
    const prompt = buildPrompt(data);

    // כרגע מתכון דמה כדי לבדוק שהכל עובד
    const fakeRecipe = {
      name: "FlavorFlow Special Pasta",
      explanation: "בחרתי את המתכון הזה כי הוא מתאים לבחירות שלך.",
      ingredients: ["Pasta", "Tomatoes", "Olive oil"],
      steps: ["Boil pasta", "Cut tomatoes", "Mix everything"],
      promptUsed: prompt,
    };

    res.json(fakeRecipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
