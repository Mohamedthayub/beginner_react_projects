import React from "react";
import ReactDOM from "react-dom/client";
import People from "./people.js";

const people = [
  { name: "Arun", age: 25, role: "Frontend Developer" },
  { name: "Divya", age: 28, role: "Backend Developer" },
  { name: "Ravi", age: 30, role: "Full Stack Developer" },
  { name: "Priya", age: 24, role: "UI/UX Designer" },
  { name: "Karthik", age: 27, role: "QA Engineer" },
  { name: "Sneha", age: 26, role: "Product Manager" },
  { name: "Manoj", age: 29, role: "DevOps Engineer" },
  { name: "Nisha", age: 23, role: "Intern" },
  { name: "Vikram", age: 32, role: "Team Lead" },
  { name: "Anjali", age: 31, role: "Software Architect" }
];
const Test = () => {
    return (
        <div className="main">
            {
                people.map((item,index) => (
                    <People key={index} Name = {item.name} Age = {item.age} Role = {item.role}/>
                ))
            }
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test/>)