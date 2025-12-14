export function buildPrompt(data) {
  return `
You are an AI chef. Create ONE single recipe.
Return JSON only — no explanations outside JSON.

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
  "name": "string",
  "ingredients": ["item 1", "item 2"],
  "steps": ["step 1", "step 2"],
  "explanation": "why this recipe fits"
}
`;
}
