const LEVELS = ["Kids", "Easy", "Medium", "Hard", "Chef"];

export default function StepDifficulty({ data, setData }) {
  return (
    <div>
      <h2>Select difficulty level</h2>
      {LEVELS.map((lvl) => (
        <label key={lvl} style={{ display: "block" }}>
          <input
            type="radio"
            checked={data.difficulty === lvl}
            onChange={() => setData({ ...data, difficulty: lvl })}
          />
          {lvl}
        </label>
      ))}
    </div>
  );
}
