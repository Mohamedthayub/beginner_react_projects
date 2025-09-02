import React from "react";
import ReactDOM from "react-dom/client";

const Game = () => {
    return (
        <div className="main">
            <div className="image-container">
                <img src="https://rockpaperscissoregame.netlify.app/images/img1.jpeg"></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPmYxW8e7aHcwazHLUSFCXbhrui5ysttNPcoWXIrc1JBoU5JJ736k9T07ackM1RMt5SA&usqp=CAU"></img>
                <img src="https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg"></img>
            </div>
        </div>
    )
}

const App = () => {
    return(
        <div>
            <Game/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);