// frontend/src/components/Steps/StepAudience.jsx

import kidsImg from "../../assets/audience/kids.png";
import adultsImg from "../../assets/audience/adults.png";
import guestsImg from "../../assets/audience/guests.png";
import romanticImg from "../../assets/audience/date.png";
import familyImg from "../../assets/audience/family.png";
import noneImg from "../../assets/audience/none.png";

const AUDIENCES = [
  { key: "Kids", label: "Kids", image: kidsImg },
  { key: "Adults", label: "Adults", image: adultsImg },
  { key: "Guests", label: "Guests", image: guestsImg },
  { key: "Romantic date", label: "Romantic date", image: romanticImg },
  { key: "Family", label: "Family", image: familyImg },
  { key: "None", label: "None", image: noneImg },
];

export default function StepAudience({ data, setData }) {
  const selectAudience = (key) => {
    setData({
      ...data,
      audience: key, // רדיו – בחירה אחת בלבד
    });
  };

  return (
    <div>
      <h2>Select audience</h2>

      <div className="category-grid">
        {AUDIENCES.map((a) => (
          <div
            key={a.key}
            className={`category-card ${
              data.audience === a.key ? "selected" : ""
            }`}
            onClick={() => selectAudience(a.key)}
          >
            <div className="category-thumb">
  <img src={a.image} alt={a.label} />
</div>


            <span>{a.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
