import React,{useState} from "react";
import ReactDOM from "react-dom/client";
let images = [
    "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://robbreport.com/wp-content/uploads/2024/08/temerario01.jpg?w=800"
]

const ImageSlider = () => {
    const genarateRandom = () => {
        return Math.floor(Math.random() * images.length);
    }
    const [rand,setrand ]= useState(0);
    return (
        <div>
            <img src={images[rand]}></img>
            <button onClick={() => {
                let result = genarateRandom();
                setrand(result);
            }}>Random Number</button>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ImageSlider/>)