import { GoogleGenerativeAI } from "@google/generative-ai";

let genAI = null;

if (process.env.GEMINI_API_KEY) {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
}

export async function generateDishImage(prompt) {
  if (!genAI) {
    throw new Error("Image generation disabled (no API key)");
  }

  const model = genAI.getGenerativeModel({
    model: "models/gemini-2.0-flash-exp-image-generation",
  });

  const result = await model.generateContent([
    {
      role: "user",
      parts: [{ text: prompt }],
    },
  ]);

  const imagePart =
    result.response.candidates?.[0]?.content?.parts?.find(
      (p) => p.inlineData
    );

  if (!imagePart) {
    throw new Error("No image returned from Gemini");
  }

  return `data:image/png;base64,${imagePart.inlineData.data}`;
}
