import { useState } from 'react'
const App = () => {
  const [ text, setText] = useState("");
  const  wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const characterCount = text.length;
  return (
    <div className="app">
      <h1>Word Counter</h1>
      <div className="input-container">
        <textarea cols={40} rows={10}  value={text} placeholder='Type something here..' onChange={(e) => setText(e.target.value)}>
        </textarea> 
        <h2>Character Count : {characterCount}</h2>
        <h2>Word Count : {wordCount}</h2>
      </div>
    </div>
  )
}
export default App
