import { useState } from 'react'
import ProgressionBar from './components/ProgressionBar/ProgressionBar'
import UploadContent from './components/Content/UploadContent/UploadContent'

import './App.css'
import useFile from './utils/logic.js'


function App() {

    const [stage, setStage] = useState(0)
    const { uploadFile, resetFile } = useFile();

    const steps = [
        <UploadContent upload={uploadFile} />,
        //<DateContent />,
        //<ReviewContent />,
        //<DownloadContent />,
    ]

    return (
        <div className="container">

            <ProgressionBar selectedState={stage} changeState={setStage} />

            <div className='content'>
                {steps[stage]}
            </div>

        </div>
    )
}

export default App
