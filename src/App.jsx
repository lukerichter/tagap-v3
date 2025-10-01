import { useState } from 'react'
import ProgressionBar from './components/ProgressionBar/ProgressionBar'
import './App.css'


function App() {

  const [stage, setStage] = useState(0)

  return (
    <div className="container">
      <ProgressionBar selectedState={stage} changeState={setStage} />
    </div>

  )
}

export default App
