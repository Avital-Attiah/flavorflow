import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipe.routes.js";
import 'dotenv/config';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/recipe", recipeRoutes);

app.listen(PORT, () => {
  console.log(`FlavorFlow backend running on port ${PORT}`);
});
