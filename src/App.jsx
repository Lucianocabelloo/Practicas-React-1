import { useState } from 'react'
import './App.css'
import Hello from './components/Hello'

function App() {

  const [message, setMessage] = useState("")

  const changeMessage = () => {
    message 
    ? setMessage("")
    : setMessage("From changed state")
  }

  const friend = `my friend of Rolling Code ${message}`

  return (
    <>
      <Hello greetings={friend} />
      <button onClick={changeMessage}> Click Me</button>
    </>
  )
}

export default App
