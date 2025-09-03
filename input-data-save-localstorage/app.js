import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";



const Test = () => {
    const [data,setData] = useState([]);
    const [input,setInput] = useState("");
    useEffect(() => {
        const newData = JSON.parse(localStorage.getItem("react-item")) || [];
        setData(newData);
    },[]);
    useEffect(() => {
        localStorage.setItem("react-item",JSON.stringify(data));
    },[data]);
    return (
        <div className="main">
            <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button onClick={() => {setData([...data,input])
                setInput("");
            }}>Save</button>            
            {
                data.map((item,index) => {
                    return <li key={index}>{item}</li>
                    
                })
            }
        </div>
        </div>
    )
}
const App = () => {
    return (
        <div>
            <Test/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)