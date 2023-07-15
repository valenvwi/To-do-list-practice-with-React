import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>To do list</h1>
      <div className="card">
        <Table />
      </div>
    </>
  )
}

export default App
