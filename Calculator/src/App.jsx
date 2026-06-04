
import { useState } from 'react'
import './App.css'

function App() {
const [content, setContent] = useState("")
const numbers = ["1","2","3","4","5","6","7","8","9",".","0","="]
const handleClick = (value) => {
  if (value === "=") {
    try {
      setContent(eval(content));
    } catch {
      setContent(" ");
    }
  } else {
    setContent(prev => prev + value);
  }
};


  return (
    <div className="calculator">
  <input className="input" type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>

  <div className="operators">
    <button className="btn operator" onClick={()=>handleClick("+")}>+</button>
    <button className="btn operator" onClick={()=>handleClick("-")}>-</button>
    <button className="btn operator" onClick={()=>handleClick("*")}>x</button>
    <button className="btn operator" onClick={()=>handleClick("/")}>/</button>
    <button className="btn operator" onClick={()=>setContent("")}>C</button>
    <button className="btn operator" onClick={()=>setContent(prev => prev.slice(0,-1))}>⌫</button>
  </div>

  <div className="grid">
    {numbers.map((nums) => (
      <button className="btn" 
      key={nums}
     onClick={() => handleClick(nums)}>{nums}
      </button>
    ))}
  </div>
  </div>
  )
}

export default App
