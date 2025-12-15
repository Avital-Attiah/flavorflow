import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// חשוב: השתמשי באחד מהמודלים שכן מופיעים אצלך ברשימה:
const model = genAI.getGenerativeModel({
  model: "models/gemini-2.5-flash"
});

export async function askGemini(prompt) {
  try {
    const result = await model.generateContent(prompt);

    let text = result.response.text();

// מסיר סימוני ``` אם קיימים
text = text.replace(/```json/gi, "").replace(/```/g, "").trim();

console.log("Cleaned AI text:", text);

return JSON.parse(text);


  } catch (err) {
    console.error("Gemini Error:", err);
    throw err;
  }
}
