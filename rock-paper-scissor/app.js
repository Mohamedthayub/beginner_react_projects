import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const choices = ["rock","paper","scissor"];
function computerChoice(){
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
function  Game  ()  {
    const [user, setUser] = useState(""); 
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner,setWinner] = useState("");
    function playground(userChoice){
        const computer = computerChoice();
        if(computer === userChoice){
            setWinner("Match is Draw");
            
        }
        else if((userChoice == "rock" && computer == "paper") || (userChoice == "paper" && computer == "scissor") || (userChoice == "scissor" && computer == "rock")){
            setComputerScore(prev => prev + 1);
            setWinner(`Computer Wins! Computer: ${computer}, You: ${userChoice}`);
        }
        else{
            setUserScore(prev => prev + 1);
            setWinner(`You Win! You: ${userChoice}, Computer: ${computer}`);
        }
    }
    useEffect(() => {
        if(user){
            playground(user);
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
                <img  alt= "rock" src="https://rockpaperscissoregame.netlify.app/images/img1.jpeg" onClick={() => setUser("rock")}></img>
                <img  alt = "paper" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPmYxW8e7aHcwazHLUSFCXbhrui5ysttNPcoWXIrc1JBoU5JJ736k9T07ackM1RMt5SA&usqp=CAU" onClick={() => setUser("paper")}></img>
                <img  alt = "scissor" src="https://thumb.silhouette-ac.com/t/a7/a7c3020b4cfb4fd154c4fcfd62702df2_t.jpeg" onClick={() => setUser("scissor")}></img>
            </div>
        </div>
    )
}

const App = () => {
    return <Game/>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);