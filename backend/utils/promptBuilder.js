export function buildPrompt(data) {
  return `
You are an AI chef.
Create ONE single recipe.

IMPORTANT RULES:
- Return JSON only. No explanations outside JSON.
- The recipe name MUST be in clear, simple English.
- Use a common food-style name (e.g. "Spicy Chickpea Pasta", "Garlic Lemon Chicken").
- Do NOT use poetic, fancy, metaphorical, or vague titles.

User choices:
- Ingredient categories: ${data.categories.join(", ")}
- Cuisine style: ${data.style}
- Time of day: ${data.timeOfDay}
- Audience: ${data.audience}
- Prep time: ${data.prepTime}
- Difficulty: ${data.difficulty}
- Dietary restrictions: ${data.diet.join(", ")}
- Servings: ${data.servings}

Return JSON in this exact structure:
{
  "name": "Simple English recipe name",
  "ingredients": ["item 1", "item 2"],
  "steps": ["step 1", "step 2"],
  "explanation": "why this recipe fits"
}
`;
}
