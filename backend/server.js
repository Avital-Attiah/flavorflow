import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipe.routes.js";
import { suggestSubstitutes } from "./controllers/recipe.controller.js";

import 'dotenv/config';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/recipe", recipeRoutes);
app.post("/api/recipe/substitutes", suggestSubstitutes);
export default app;

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`FlavorFlow backend running on port ${PORT}`);
  });
}

