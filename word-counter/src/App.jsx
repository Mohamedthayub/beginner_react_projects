import { useState } from 'react'
const App = () => {
  const [character ,setCharacter] = useState("");
  const [word,setWord] = useState([]);
  function  wordCount (char){
    let convertWord = char.split(" ");
    let filteredWord = convertWord.filter((item) => item != "");
    setWord(filteredWord);
  }
   return (
    <div className="app">
      <h1>Word Counter</h1>
      <div className="input-container">
        <textarea cols={40} rows={10} onKeyUp={(e) =>  {
          setCharacter(e.target.value);
          console.log(character);
          wordCount(e.target.value);
        }} >
        </textarea>
        <h1>Word Counts :{character.length} </h1>
        <h1>Character Counts :{word.length} </h1>
      </div>
    </div>
  )
}
export default App
