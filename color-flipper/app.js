import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom/client";

const ColorFlipper = () => {
    const MAX_VALUE = 256;
    const [bgColor, setbgColor] = useState("rgb(255,255,255)")
    const RandomColor = () => {
       return Math.floor(Math.random() * MAX_VALUE);
    }
    const changeColor = () => {
        const red = RandomColor();
        const green = RandomColor();
        const blue = RandomColor();
        const newColor = `rgb(${red},${green},${blue})`;
        setbgColor(newColor);
    }
    return (
    <div className="container" style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem"
      }}>
        <div className="main">
            <button className="button" onClick={changeColor}>Change</button>
            <h2>{bgColor}</h2>
        </div>
    </div>
    )
}

const App = () => {
    return (
        <div>
            <ColorFlipper/>
        </div>
    )
}

const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)