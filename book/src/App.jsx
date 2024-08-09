import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Container from './compo.jsx/Container'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Container/>
    </div>
  )
}

export default App
