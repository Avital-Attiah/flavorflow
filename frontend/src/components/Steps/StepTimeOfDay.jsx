const TIMES = ["Morning", "Noon", "Evening", "Night", "Snack", "None"];

export default function StepTimeOfDay({ data, setData }) {
  return (
    <div>
      <h2>Select time of day</h2>
      {TIMES.map((t) => (
        <label key={t} style={{ display: "block" }}>
          <input
            type="radio"
            name="timeofday"
            checked={data.timeOfDay === t}
            onChange={() => setData({ ...data, timeOfDay: t })}
          />
          {t}
        </label>
      ))}
    </div>
  );
}
