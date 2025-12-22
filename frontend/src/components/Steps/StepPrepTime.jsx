// frontend/src/components/Steps/StepPrepTime.jsx

import min30Img from "../../assets/preptime/30 mins.png";
import hour1Img from "../../assets/preptime/1 hours.png";
import hour2Img from "../../assets/preptime/2 hours.png";
import hour4Img from "../../assets/preptime/4 hours.png";
import weekImg from "../../assets/preptime/1 week.png";
import noneImg from "../../assets/preptime/none.png";

const PREP_TIMES = [
  { key: "30 minutes", label: "30 minutes", image: min30Img },
  { key: "1 hour", label: "1 hour", image: hour1Img },
  { key: "2 hours", label: "2 hours", image: hour2Img },
  { key: "4 hours", label: "4 hours", image: hour4Img },
  { key: "1 week", label: "1 week", image: weekImg },
  { key: "None", label: "None", image: noneImg },
];

export default function StepPrepTime({ data, setData }) {
  const selectPrepTime = (key) => {
    setData({
      ...data,
      prepTime: key, // רדיו – בחירה אחת
    });
  };

  return (
    <div>
      <h2>Select preparation time</h2>

      <div className="category-grid">
        {PREP_TIMES.map((t) => (
          <div
            key={t.key}
            className={`category-card ${
              data.prepTime === t.key ? "selected" : ""
            }`}
            onClick={() => selectPrepTime(t.key)}
          >
            <div className="category-thumb">
  <img src={t.image} alt={t.label} />
</div>


            <span>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
