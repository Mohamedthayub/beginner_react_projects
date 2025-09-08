import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'


const Main = () => {
  return (
    <div className="main">
      <App/>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main/>);