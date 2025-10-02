import { useState } from 'react'
import ProgressionBar from './components/ProgressionBar/ProgressionBar'
import Content from './components/Content/Content'
import './App.css'



function App() {

    const [stage, setStage] = useState(0)

    return (
        <div className="container">
            <ProgressionBar selectedState={stage} changeState={setStage} />
            <Content currentState={stage} />
        </div>
    )
}

export default App
