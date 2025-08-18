import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";


const Todo = () => {
    const [input,setInput] = useState(["one","two","three"]);
    const [newTask,setTask] = useState("");
    const addInput = (event) => {
        setTask(event.target.value);
    }
    return (
        <div>
            <input value={newTask} onChange={addInput}></input>
            <button>Add</button>
            <div className="task-items">
                <ol>
                    {input.map((item,index) => (
                    <li key={index}>{item}
                    <button>Delete</button></li>
                  ))}
                </ol>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todo/>)