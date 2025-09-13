import React,{useEffect} from "react";
import ReactDOM from "react-dom/client";

const Test = () => {
    useEffect(() => {
        console.log("This is UseEffect.")
    },[]);
    return (
        <div>
            <h1>This is Thayub</h1>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test/>);