import React, { useEffect, useState } from "react";
import { getRecipeHistory } from "../history";

export default function HistorySidebar({ onSelect }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getRecipeHistory());
  }, []);

  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>היסטוריית מתכונים</h3>

      {history.length === 0 && <p>אין היסטוריה עדיין...</p>}

      {history.map((item) => (
        <div
          key={item.id}
          style={styles.item}
          onClick={() => onSelect(item.fullRecipe)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    background: "#f3f3f3",
    padding: "15px",
    borderRight: "1px solid #ccc",
    height: "100vh",
    overflowY: "auto",
    position: "fixed",
    left: 0,
    top: 0,
  },
  title: {
    marginBottom: "10px",
  },
  item: {
    padding: "10px",
    background: "white",
    marginBottom: "8px",
    borderRadius: "5px",
    cursor: "pointer",
    border: "1px solid #ddd",
  },
};
