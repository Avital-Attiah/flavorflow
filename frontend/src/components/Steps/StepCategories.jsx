// frontend/src/components/Steps/StepCategories.jsx

import vegImg from "../../assets/categories/vegtables.webp";
import chickenImg from "../../assets/categories/chicken.png";
import fishImg from "../../assets/categories/fish.png";
import chocolateImg from "../../assets/categories/chocolate.webp";
import beefImg from "../../assets/categories/beef.png";
import pastaImg from "../../assets/categories/pasta.png";

const CATEGORIES = [
  { key: "Vegetables", label: "Vegetables", image: vegImg },
  { key: "Chicken", label: "Chicken", image: chickenImg },
  { key: "Fish", label: "Fish", image: fishImg },
  { key: "Chocolate", label: "Chocolate", image: chocolateImg },
  { key: "Beef", label: "Beef", image: beefImg },
  { key: "Pasta", label: "Pasta", image: pastaImg },
];

export default function StepCategories({ data, setData }) {
  const toggleCategory = (key) => {
    const exists = data.categories.includes(key);

    setData({
      ...data,
      categories: exists
        ? data.categories.filter((c) => c !== key)
        : [...data.categories, key],
    });
  };

  return (
    <div>
      <h2>Select ingredient categories</h2>

      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.key}
            className={`category-card ${
              data.categories.includes(cat.key) ? "selected" : ""
            }`}
            onClick={() => toggleCategory(cat.key)}
          >
           <div className="category-thumb">
  <img src={cat.image} alt={cat.label} />
</div>

            <span>{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
