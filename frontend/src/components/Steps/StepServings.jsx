export default function StepServings({ data, setData }) {
  return (
    <div>
      <h2>Select servings</h2>

      <input
        type="number"
        min="1"
        max="50"
        value={data.servings}
        onChange={(e) =>
          setData({ ...data, servings: Number(e.target.value) })
        }
      />
    </div>
  );
}
