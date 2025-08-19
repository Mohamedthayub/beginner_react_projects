import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./Todolist.js";
const AppLayout = () => {
    return (
        <div>
            <TodoList/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)