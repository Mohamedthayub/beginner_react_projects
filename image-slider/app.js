import React,{useState} from "react";
import ReactDOM from "react-dom/client";
let images = [
    "https://media.architecturaldigest.com/photos/66a914f1a958d12e0cc94a8e/16:9/w_1280,c_limit/DSC_5903.jpg",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://robbreport.com/wp-content/uploads/2024/08/temerario01.jpg?w=800"
]

const ImageSlider = () => {
    const [count,setCount ]= useState(0);
    return (
        <div className="image-slider">
          <div >
            <img src={images[count]}></img>
            <div className="btn-container">
                <button onClick={() => {
                    if(count ==  images.length-1 ){
                        setCount(images.length -1);
                    }
                    else{
                        setCount(count + 1);
                    }
                }} className="left-btn">+</button>
                <button onClick={() => {
                    if(count < 1){
                        setCount(0);
                    }
                    else{
                        setCount(count - 1);
                    }
                }} className="right-btn">
                    -
                </button>
               </div>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ImageSlider/>)