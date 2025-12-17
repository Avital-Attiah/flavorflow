import { buildPrompt } from "../utils/promptBuilder.js";

describe("buildPrompt", () => {

  it("should include all user selections in the prompt", () => {
    const data = {
      categories: ["Chicken", "Vegetables"],
      style: "Italian",
      timeOfDay: "Dinner",
      audience: "Family",
      prepTime: "30 minutes",
      difficulty: "Easy",
      diet: ["Gluten Free"],
      servings: 4,
    };

    const prompt = buildPrompt(data);

    expect(prompt).toContain("Chicken");
    expect(prompt).toContain("Vegetables");
    expect(prompt).toContain("Italian");
    expect(prompt).toContain("Dinner");
    expect(prompt).toContain("Family");
    expect(prompt).toContain("30 minutes");
    expect(prompt).toContain("Easy");
    expect(prompt).toContain("Gluten Free");
    expect(prompt).toContain("4");
  });

});
it("should always request JSON-only output", () => {
  const data = {
    categories: [],
    style: null,
    timeOfDay: null,
    audience: null,
    prepTime: null,
    difficulty: null,
    diet: [],
    servings: 2,
  };

  const prompt = buildPrompt(data);

  expect(prompt).toContain("Return JSON only");
});
