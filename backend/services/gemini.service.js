import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

// ⚠ דוגמה לשימוש במודל חדש
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"  // או gemini-1.5-pro
});

export async function askGemini(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("AI RAW RESPONSE:", text);

    return JSON.parse(text);   // חשוב! לקבל JSON אמיתי
  } catch (err) {
    console.error("Gemini Error:", err);
    throw err;
  }
}
