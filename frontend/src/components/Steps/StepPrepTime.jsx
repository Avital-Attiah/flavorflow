const TIMES = [
  "30 minutes",
  "1 hour",
  "2 hours",
  "4 hours",
  "1 week",
  "None",
];

export default function StepPrepTime({ data, setData }) {
  return (
    <div>
      <h2>Select preparation time</h2>
      {TIMES.map((t) => (
        <label key={t} style={{ display: "block" }}>
          <input
            type="radio"
            checked={data.prepTime === t}
            onChange={() => setData({ ...data, prepTime: t })}
          />
          {t}
        </label>
      ))}
    </div>
  );
}
