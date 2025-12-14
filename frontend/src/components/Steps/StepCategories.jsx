const OPTIONS = [
  "Vegetables",
  "Chicken",
  "Fish",
  "Chocolate",
  "Beef",
  "Pasta",
];

export default function StepCategories({ data, setData }) {
  const toggle = (val) => {
    const exists = data.categories.includes(val);
    setData({
      ...data,
      categories: exists
        ? data.categories.filter((v) => v !== val)
        : [...data.categories, val],
    });
  };

  return (
    <div>
      <h2>Select ingredient categories</h2>
      {OPTIONS.map((cat) => (
        <label key={cat} style={{ display: "block" }}>
          <input
            type="checkbox"
            checked={data.categories.includes(cat)}
            onChange={() => toggle(cat)}
          />
          {cat}
        </label>
      ))}
    </div>
  );
}
