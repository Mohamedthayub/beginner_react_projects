import React from "react";
import ReactDOM from "react-dom/client"
import React, { useState, useEffect } from "react";

function DigitalClock() {
  // State for storing the current time
  const [time, setTime] = useState(new Date());

  // State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // useEffect to update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // update state with current time
    }, 1000);

    // cleanup when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format time
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // convert 24hr -> 12hr
  const formattedHours = hours % 12 || 12;

  // Styles
  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkMode ? "#121212" : "#f4f4f4",
    color: darkMode ? "#ffffff" : "#000000",
    fontFamily: "monospace",
    transition: "all 0.3s ease-in-out"
  };

  return (
    <div style={containerStyle}>
      <h1>
        {formattedHours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")} {ampm}
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          background: darkMode ? "#ffffff" : "#000000",
          color: darkMode ? "#000000" : "#ffffff"
        }}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DigitalClock/>)