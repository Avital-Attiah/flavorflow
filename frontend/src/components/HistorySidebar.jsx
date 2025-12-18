// frontend/src/components/HistorySidebar.jsx
import { useEffect, useState } from "react";
import { getRecipeHistory } from "../history";
import "../styles/history.css";

export default function HistorySidebar({ onSelect }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getRecipeHistory());
  }, []);

  return (
    <aside className="history-sidebar">
      <div className="history-title">📜 היסטוריית מתכונים</div>

      {history.length === 0 && (
        <p className="history-empty">אין היסטוריה עדיין…</p>
      )}

      <ul className="history-list">
        {history.map((item) => (
          <li
            key={item.id}
            className="history-item"
            onClick={() => onSelect(item.fullRecipe)}
          >
            <div className="history-recipe-name">
              {item.name}
            </div>

            <div className="history-date">
              {new Date(item.id).toLocaleDateString("he-IL")}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
