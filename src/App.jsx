import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Dashboard from './components/Dashboard.jsx'
import MainBody from './components/MainBody.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Dashboard />
      <MainBody />
    </>
  )
}

export default App
