export function buildPrompt(data) {
  return `
You are an AI chef. Create ONE single recipe.

User’s choices:
- Categories: ${data.categories?.join(", ") || "any"}
- Cuisine: ${data.style || "any"}
- Time of day: ${data.timeOfDay || "any"}
- Audience: ${data.audience || "any"}
- Prep time: ${data.prepTime || "any"}
- Difficulty: ${data.difficulty || "any"}
- Dietary restrictions: ${data.diet?.join(", ") || "none"}
- Servings: ${data.servings || 2}

Return JSON ONLY:
{
  "name": "...",
  "ingredients": ["...", "..."],
  "steps": ["...", "..."],
  "explanation": "why this fits the choices"
}
  `;
}
