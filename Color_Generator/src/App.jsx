import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("#ffffff")

 function generateColor() {
  const r = Math.floor(Math.random() * 256).toString(16).padStart(2, "0")
  const g = Math.floor(Math.random() * 256).toString(16).padStart(2, "0")
  const b = Math.floor(Math.random() * 256).toString(16).padStart(2, "0")

  const color = "#" + r + g + b
  setColor(color)
}


  return (
     <div style={{ backgroundColor: color, height: "100vh" }}>
   
      <button onClick={generateColor}>Generate</button>
    </div>
  )
}

export default App
