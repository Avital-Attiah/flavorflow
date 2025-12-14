const DIETS = [
  "Kosher",
  "Dairy",
  "Meat",
  "Gluten-free",
  "Sugar-free",
  "Vegan",
  "Vegetarian",
];

export default function StepDiet({ data, setData }) {
  const toggle = (val) => {
    const exists = data.diet.includes(val);
    setData({
      ...data,
      diet: exists
        ? data.diet.filter((v) => v !== val)
        : [...data.diet, val],
    });
  };

  return (
    <div>
      <h2>Select dietary restrictions</h2>
      {DIETS.map((d) => (
        <label key={d} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={data.diet.includes(d)}
            onChange={() => toggle(d)}
          />
          {d}
        </label>
      ))}
    </div>
  );
}
