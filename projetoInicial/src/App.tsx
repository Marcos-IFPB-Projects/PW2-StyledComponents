import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Marcos Lorhan's First</h1>
      <h1>Vite + React</h1>
      <h1>App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Created in IFPB campus Cajazeiras
        </p>
      </div>
      
    </>
  )
}

export default App
