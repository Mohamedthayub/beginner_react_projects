import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom/client";




const DarkLight = () => {
    const [mode , setMode ] = useState(() => {
        return localStorage.getItem("mode") || "Dark";
    });
    
    useEffect(() => {
        localStorage.setItem("mode",mode);
    },[mode]);
    return (
        <div className="container">
            <h1>{mode}</h1>
            <button onClick={() => {
                mode == "Dark" ? setMode("Light"): setMode("Dark")
            }}>Change Mode</button>
        </div>
    )
}
const App = () => {
    return (
        <div className="container">
            <DarkLight/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);