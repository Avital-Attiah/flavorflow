import request from "supertest";
import { jest } from "@jest/globals";

jest.unstable_mockModule("../services/gemini.service.js", () => ({
  askGemini: async () => ({
    name: "Test Recipe",
    ingredients: ["Ingredient 1"],
    steps: ["Step 1"],
    explanation: "Test explanation",
  }),
}));

// ⭐ mock ל־Image AI 
jest.unstable_mockModule("../services/image.service.js", () => ({
  generateDishImage: async () =>
    "data:image/png;base64,FAKE_IMAGE_FOR_TESTS",
}));


const { default: app } = await import("../server.js");

describe("POST /api/recipe/generate", () => {
  it("should return a generated recipe JSON", async () => {
    const response = await request(app)
      .post("/api/recipe/generate")
      .send({
        categories: ["Chicken"],
        style: "Italian",
        timeOfDay: "Dinner",
        audience: "Family",
        prepTime: "30 minutes",
        difficulty: "Easy",
        diet: [],
        servings: 2,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("ingredients");
    expect(response.body).toHaveProperty("steps");
  });
});
