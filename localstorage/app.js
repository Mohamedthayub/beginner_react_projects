import React, { useState }  from "react";
import ReactDOM from "react-dom/client";

let users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 28 },
  { id: 4, name: "Diana", age: 22 },
  { id: 5, name: "Ethan", age: 35 },
  { id: 6, name: "Fiona", age: 27 },
  { id: 7, name: "George", age: 29 },
  { id: 8, name: "Hannah", age: 24 },
  { id: 9, name: "Ian", age: 31 },
  { id: 10, name: "Julia", age: 26 }
];

const storeData = () => {
    localStorage.setItem("react-item",JSON.stringify(users));
}

let getData = () => {
    users = JSON.parse(localStorage.getItem("react-item")) || [];
    return users;
}
let dltData = () =>{
    localStorage.clear();
}
const User = ({Name,age}) => {
    return (
        <div>
            <div className="user-container">
                <h1>{Name}</h1>
                <h2>{age}</h2>
            </div>
        </div>
    )
}
const App = () => {
    const [username,createuser] = useState([]);
    return(
        <div>
            <button onClick={storeData}>Store</button>
            <button onClick={() => {
                let result = getData();
                createuser(result);           
            }}>Show Data</button>
            <button onClick={dltData}>Delete Items</button>
             {username.map((item) => (
                    <User key={item.id} Name = {item.name} age= {item.age}/>
            ))}
            
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);