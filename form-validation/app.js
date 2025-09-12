import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword ]= useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const validateForm  = () => {
        let valid = true;
        setEmailError("");
        setPasswordError("");

        if(email == ""){
            setEmailError("Email is required");
            valid = false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
          setEmailError("Email is invalid");
           valid = false;
        }
        
        if(password == ""){
            setPasswordError("Password  is required");
            valid = false;
        }
        else if (password.length < 6){
            setPasswordError("Password must be atleast 6 characters.");
            valid  = false;
        }
        
        return valid;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateForm()){
            alert("Form submitted successfully");
            setEmail("");
            setPassword("");
        }
    };
    return  (
        <div className="main"> 
            <form onSubmit={handleSubmit}>
                <div className="user-email">
                    <label>Email :</label>
                    <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"></input>
                    <p>{emailError}</p>
                </div>    
                <div className="user-password">
                    <label>Password :</label>
                    <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password "></input>
                    <p>{passwordError}</p>
                </div>
                <div className="btn-container">
                <button>
                    Log in
                </button>
                </div>
            </form>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);