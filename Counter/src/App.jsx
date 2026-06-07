import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message,setMessage]=useState("")

  function handleIncrease(){
       setCount(prev=> prev + 1)
      
  }
    function handleDecrease() {
 if(count === 0){
    setMessage("Count cannot be negative")
    useEffect(() => {
      if (message){
        const Timer = setTimeout(()=>{
          setMessage("")
        },2000)
        return () => clearTimeout(Timer)
      }
        },[message])

 }else{
  setCount(prev => prev-1)
 }
 
  }

  
    function handleReset(){
       setCount(0)
    
  }

  return (
    <>
      <h1>Counter</h1>
      <p>Count : {count}</p>
      <button  onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <p>{message}</p>

    </>
  )
}


export default App
