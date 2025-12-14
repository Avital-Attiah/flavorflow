const OPTIONS = [
  "Kids",
  "Adults",
  "Guests",
  "Romantic date",
  "Family",
  "None",
];

export default function StepAudience({ data, setData }) {
  return (
    <div>
      <h2>Select audience</h2>
      {OPTIONS.map((o) => (
        <label key={o} style={{ display: "block" }}>
          <input
            type="radio"
            checked={data.audience === o}
            onChange={() => setData({ ...data, audience: o })}
          />
          {o}
        </label>
      ))}
    </div>
  );
}
