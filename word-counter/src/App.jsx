import { useState } from 'react'
const App = () => {
  const [char ,setChar] = useState("");
  const [word,setWord] = useState("");
   return (
    <div className="main">
      <h1>Word Counter</h1>
      <div className="input-container">
        <textarea cols={40} rows={10} onKeyUp={(e) =>  {
         
        }} >
        </textarea>
        <h1>Word Counts :{char.length} </h1>
        <h1>Character Counts :{word.length} </h1>
      </div>
    </div>
  )
}
export default App
