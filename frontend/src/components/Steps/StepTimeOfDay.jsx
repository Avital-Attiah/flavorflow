// frontend/src/components/Steps/StepTimeOfDay.jsx

import morningImg from "../../assets/timeOfDay/morning.png";
import noonImg from "../../assets/timeOfDay/noon.png";
import eveningImg from "../../assets/timeOfDay/evening.png";
import nightImg from "../../assets/timeOfDay/night.png";
import snackImg from "../../assets/timeOfDay/snack.png";
import noneImg from "../../assets/timeOfDay/none.png";

const TIMES = [
  { key: "Morning", label: "Morning", image: morningImg },
  { key: "Noon", label: "Noon", image: noonImg },
  { key: "Evening", label: "Evening", image: eveningImg },
  { key: "Night", label: "Night", image: nightImg },
  { key: "Snack", label: "Snack", image: snackImg },
  { key: "None", label: "None", image: noneImg },
];

export default function StepTimeOfDay({ data, setData }) {
  const selectTime = (key) => {
    setData({
      ...data,
      timeOfDay: key, // בחירה אחת בלבד
    });
  };

  return (
    <div>
      <h2>Select time of day</h2>

      <div className="category-grid">
        {TIMES.map((t) => (
          <div
            key={t.key}
            className={`category-card ${data.timeOfDay === t.key ? "selected" : ""}`}
            onClick={() => selectTime(t.key)}
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
