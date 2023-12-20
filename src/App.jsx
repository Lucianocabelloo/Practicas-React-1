import './App.css'
import Hello from './components/Hello'

function App() {

  const friend = "my friend of Rolling Code"

  return (
    <>
      <Hello greetings={friend} />
    </>
  )
}

export default App
