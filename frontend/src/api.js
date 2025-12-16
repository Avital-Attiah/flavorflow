import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const generateRecipe = (data) =>
  API.post("/recipe/generate", data);

export const getSubstitutes = (payload) =>
  API.post("/recipe/substitutes", payload);