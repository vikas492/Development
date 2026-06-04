import { useState } from 'react'

import './App.css'

function App() {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
 



  async function fetchQuotes() {
  setLoading(true)
  setError("")

  try {
    const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
      headers: {
        "X-Api-Key": ""
      }
    })

    if (!response.ok) {
      throw new Error("Failed to fetch")
    }

    const data = await response.json()

    // API returns an ARRAY
    setQuote(`${data[0].quote} - ${data[0].author}`)

  } catch (error) {
    setError("Something went wrong")
  } finally {
    setLoading(false)
  }
}

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && quote && <p>{quote}</p>}
      
      <button onClick={fetchQuotes} disabled={loading} >Get Quote</button>

    </>
  )
}

export default App
