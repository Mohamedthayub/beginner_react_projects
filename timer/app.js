import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useEffect} from "react";

const Timer = () => {
    const[ count,setCount] = useState(0);
    
    return (
        <div>
            <h1>{count}</h1>
            <div className="btn-container">
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <Timer/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);