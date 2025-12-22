// frontend/src/components/Steps/StepDifficulty.jsx

import kidsImg from "../../assets/difficulty/kids.png";
import easyImg from "../../assets/difficulty/easy.png";
import mediumImg from "../../assets/difficulty/medium.png";
import hardImg from "../../assets/difficulty/hard.png";
import chefImg from "../../assets/difficulty/chef.png";

const LEVELS = [
  { key: "Kids", label: "Kids", image: kidsImg },
  { key: "Easy", label: "Easy", image: easyImg },
  { key: "Medium", label: "Medium", image: mediumImg },
  { key: "Hard", label: "Hard", image: hardImg },
  { key: "Chef", label: "Chef", image: chefImg },
];

export default function StepDifficulty({ data, setData }) {
  const selectLevel = (key) => {
    setData({
      ...data,
      difficulty: key, // רדיו – בחירה אחת בלבד
    });
  };

  return (
    <div>
      <h2>Select difficulty level</h2>

      <div className="category-grid">
        {LEVELS.map((lvl) => (
          <div
            key={lvl.key}
            className={`category-card ${
              data.difficulty === lvl.key ? "selected" : ""
            }`}
            onClick={() => selectLevel(lvl.key)}
          >
            <div className="category-thumb">
  <img src={lvl.image} alt={lvl.label} />
</div>


            <span>{lvl.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
