import React from "react";
import TodoItems from "./todoItem.jsx";
import { useState } from "react";
import { useRef } from "react";
import "../styles/todo.css";
import { useEffect } from "react";
let count = 0;
const Todo = () => {
    const [data,setData] = useState([]);
    const inputRef = useRef(null)
    const add = () => {
        setData([...data,{no :count++,text : inputRef.current.value, display:""}])
        inputRef.current.value = "";
        localStorage.setItem("thayub-count" , count);

    }
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem("thayub-todo")));
        count = localStorage.getItem("thayub-count");
    },[])
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem("thayub-todo", JSON.stringify(data))
        },100);
    },[data]);
    return (
        <div className="main">
            <div className="todo">
                <h1>Todo-List</h1>
                <div className="input-container">
                    <input  className="todo-input"type="text" ref={inputRef}></input>
                    <button className="todo-add-btn"onClick={() => {
                        add();
                    }}>Add</button>
                </div>
            <div className="todoItems">
                {data.map((item,index)=> (
                    <TodoItems key={index} no = {item.no} text = {item.text} display = {item.display} setData = {setData} />
                ))}
            </div>
        </div>
     </div>
    )
}


export default  Todo;