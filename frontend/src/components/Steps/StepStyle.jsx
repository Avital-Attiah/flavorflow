const STYLES = [
  "Italian",
  "Thai",
  "Chinese",
  "Mexican",
  "Arab",
  "Israeli",
  "None",
];

export default function StepStyle({ data, setData }) {
  return (
    <div>
      <h2>Select cuisine style</h2>
      {STYLES.map((style) => (
        <label key={style} style={{ display: "block" }}>
          <input
            type="radio"
            name="style"
            checked={data.style === style}
            onChange={() => setData({ ...data, style })}
          />
          {style}
        </label>
      ))}
    </div>
  );
}
