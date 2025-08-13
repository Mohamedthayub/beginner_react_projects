import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Counter = () => {
    const [count , setCount ] = useState(0);
    return (
        <div className="container">
            <div className="child-container"> 
                  <h1>{count}</h1>
            <div className="counter">
                <button onClick={() => {
                    setCount(count + 1)
                }}>Increase</button>
                <button onClick={() => {
                    setCount(0)
                }}>Reset</button>
                <button onClick={() => {
                    setCount(count-1)
                }}>Decrease</button>
            </div>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Counter/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)