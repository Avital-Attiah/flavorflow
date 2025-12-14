import express from "express";
import { generateRecipe } from "../controllers/recipe.controller.js";

const router = express.Router();

router.post("/generate", generateRecipe);

export default router;
