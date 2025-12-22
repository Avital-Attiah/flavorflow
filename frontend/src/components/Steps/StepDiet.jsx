// frontend/src/components/Steps/StepDiet.jsx

import kosherImg from "../../assets/diet/kosher.png";
import dairyImg from "../../assets/diet/dairy.png";
import meatImg from "../../assets/diet/meat.png";
import glutenFreeImg from "../../assets/diet/glutenfree.png";
import sugarFreeImg from "../../assets/diet/sugarfree.png";
import veganImg from "../../assets/diet/vegan.png";
import vegetarianImg from "../../assets/diet/vegetarian.png";

const DIETS = [
  { key: "Kosher", label: "Kosher", image: kosherImg },
  { key: "Dairy", label: "Dairy", image: dairyImg },
  { key: "Meat", label: "Meat", image: meatImg },
  { key: "Gluten-free", label: "Gluten-free", image: glutenFreeImg },
  { key: "Sugar-free", label: "Sugar-free", image: sugarFreeImg },
  { key: "Vegan", label: "Vegan", image: veganImg },
  { key: "Vegetarian", label: "Vegetarian", image: vegetarianImg },
];

export default function StepDiet({ data, setData }) {
  const toggleDiet = (key) => {
    const exists = data.diet.includes(key);

    setData({
      ...data,
      diet: exists ? data.diet.filter((d) => d !== key) : [...data.diet, key],
    });
  };

  return (
    <div>
      <h2>Select dietary restrictions</h2>

      <div className="category-grid">
        {DIETS.map((d) => {
          const selected = data.diet.includes(d.key);

          return (
            <div
              key={d.key}
              className={`category-card ${selected ? "selected" : ""}`}
              onClick={() => toggleDiet(d.key)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") toggleDiet(d.key);
              }}
              aria-pressed={selected}
            >
              <div className="category-thumb">
  <img src={d.image} alt={d.label} />
</div>


              <span>{d.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
