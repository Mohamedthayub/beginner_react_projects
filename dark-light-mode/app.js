import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const DarkLight = () => {
  const [mode, setMode] = useState(() => localStorage.getItem("mode") || "Dark");

  useEffect(() => {
    localStorage.setItem("mode", mode);
    document.body.style.backgroundColor = mode === "Dark" ? "#222" : "#fff";
    document.body.style.color = mode === "Dark" ? "#fff" : "#000";
  }, [mode]);

  return (
    <div className="container">
      <h1>{mode} Mode</h1>
      <button onClick={() => setMode(mode === "Dark" ? "Light" : "Dark")}>
        Change Mode
      </button>
    </div>
  );
};

const App = () => <DarkLight />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
