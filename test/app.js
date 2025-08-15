import React from "react";
import ReactDOM from "react-dom/client";

const bgcolor = () => ({
    backgroundColor: "red",
    padding: "20px"
});

const Test = () => {
    return (
        <div>
            <h1 style={bgcolor()}>This app for test</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);
