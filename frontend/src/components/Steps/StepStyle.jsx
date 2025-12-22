// frontend/src/components/Steps/StepStyle.jsx

import italianImg from "../../assets/cuisine/italian.png";
import thaiImg from "../../assets/cuisine/thai.png";
import chineseImg from "../../assets/cuisine/chinese.png";
import mexicanImg from "../../assets/cuisine/mexican.png";
import arabImg from "../../assets/cuisine/arab.png";
import israeliImg from "../../assets/cuisine/israeli.png";
import noneImg from "../../assets/cuisine/none.png";

const STYLES = [
  { key: "Italian", label: "Italian", image: italianImg },
  { key: "Thai", label: "Thai", image: thaiImg },
  { key: "Chinese", label: "Chinese", image: chineseImg },
  { key: "Mexican", label: "Mexican", image: mexicanImg },
  { key: "Arab", label: "Arab", image: arabImg },
  { key: "Israeli", label: "Israeli", image: israeliImg },
  { key: "None", label: "No specific cuisine", image: noneImg },
];

export default function StepStyle({ data, setData }) {
  const selectStyle = (key) => {
    setData({
      ...data,
      style: key, // בחירה אחת בלבד
    });
  };

  return (
    <div>
      <h2>Select cuisine style</h2>

      <div className="category-grid">
        {STYLES.map((style) => (
          <div
            key={style.key}
            className={`category-card ${
              data.style === style.key ? "selected" : ""
            }`}
            onClick={() => selectStyle(style.key)}
          >
            <div className="category-thumb">
  <img src={style.image} alt={style.label} />
</div>


            <span>{style.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
