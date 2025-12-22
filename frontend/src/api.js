import axios from "axios";

const API = axios.create({
  baseURL: "https://flavorflow-twwf.onrender.com/api",
});

export const generateRecipe = (data) =>
  API.post("/recipe/generate", data);

export const getSubstitutes = (payload) =>
  API.post("/recipe/substitutes", payload);
