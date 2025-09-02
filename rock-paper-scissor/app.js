import React, { use, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const choices = ["rock","paper","scissor"];
function ComputerChoice(){
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
const Game = () => {
    const [user, setUser] = useState(""); 
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner,showWinner] = useState("");
    useEffect(() => {
        const Computer = ComputerChoice();
        if(user == Computer){
            showWinner("Match is Draw");
        }
        else{
            if(user == "rock" && Computer == "paper"){
                setComputerScore(computerScore + 1);
                showWinner(`Computer Wins computer Choice is ${Computer} user choice is ${user}`);
            }
            else if (user == "paper" && Computer == "scissor"){
               setComputerScore(computerScore + 1);
               showWinner(`Computer Wins computer Choice is ${Computer} user choice is ${user}`);

               
            }
            else if (user == "scissor" && Computer == "rock"){
                setComputerScore(computerScore + 1);
                showWinner(`Computer Wins computer Choice is ${Computer} user choice is ${user}`);

                
            }
            else{
                setUserScore(userScore + 1);
                showWinner(`user Wins user Choice is ${user} Computer choice is ${Computer}`);

            }
        }
    },[user]);
    return (
        <div className="main">
            <h1 className="winner">{winner}</h1>
            <div className="score-board">
                <h1>userScore : {userScore}</h1>
                <h1>computerScore : {computerScore}</h1>
            </div>
            <div className="image-container">
                <img src="https://rockpaperscissoregame.netlify.app/images/img1.jpeg" onClick={() => setUser("rock")}></img>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPmYxW8e7aHcwazHLUSFCXbhrui5ysttNPcoWXIrc1JBoU5JJ736k9T07ackM1RMt5SA&usqp=CAU" onClick={() => setUser("paper")}></img>
                <img src="https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg" onClick={() => setUser("scissor")}></img>
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