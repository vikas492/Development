import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
  "/images/360_F_745908163_xUE4s9IoMDi2mUT4bNdVOsYhGi2rzdNW.webp",
  "/images/360_F_793398121_mCIMRhJMZgX3Fn3T38V0uBJ00BwuIhIQ.webp",
  "/images/5707420.webp",
  "/images/erwin-smith-pictures-93y04qh0c60prc4q.webp",
  "/images/male-anime-characters-91yk3cicxe95zj34.webp",
  "/images/male-anime-characters-e5qgslpvg4gaf0rc.webp",
  "/images/wp6361423.webp",
  "/images/wp6361647.jpg"
]
  function handleNext() {
   setCurrentIndex(prev=>
      prev===images.length-1?0:prev+1
    )
  }

    function handlePrevious() {
    setCurrentIndex(prev=>
      prev===0?images.length-1:prev-1
    )
  }

  useEffect(() => {
 const interval =  setInterval(()=>{
      setCurrentIndex(prev =>
      prev === images.length - 1 ? 0 : prev + 1)
 },3000)
 return () => clearInterval(interval)
}, [images.length])

  return (
    <>
    <img
  src={images[currentIndex]}
  alt={`Slide ${currentIndex + 1}`}
  style={{ width: "300px", height: "200px", objectFit: "cover" }}
/>
<button onClick={handlePrevious}>Previous</button>
<button onClick={handleNext}>Next</button>
    </>
  )
}

export default App
