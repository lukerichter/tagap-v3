import { useState } from 'react'
import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg";
import ProgressionBar from './components/ProgressionBar/ProgressionBar'
import UploadContent from './components/Content/UploadContent/UploadContent'
import Navigation from './components/Navigation/Navigation.jsx';
import './App.css'


function App() {

    const [stage, setStage] = useState(0)

    const steps = [
        {
            content: <UploadContent upload={uploadFile} />,
            icon: <CgSoftwareUpload />,
            name: "Upload"
        },
        {
            // content: <DateContent />,
            icon: <CgCalendarDates />,
            name: "Date Picker"
        },
        {
            // content: <DateContent />,
            icon: <CgEye />,
            name: "Review"
        },
        {
            // content: <DateContent />,
            icon: <CgSoftwareDownload />,
            name: "Save"
        }
    ]

    const progressionList = steps.map(({ icon, name }) => ({ icon, name }))

    return (
        <>
            <div className='container'>

                <div className="app">

                    <ProgressionBar
                        progressionList={progressionList}
                        selectedState={stage}
                        changeState={setStage}
                    />

                    <div className='app--content'>
                        {steps[stage].content}
                    </div>

                    <Navigation
                        stage={stage}
                        setStage={setStage}
                    />

                </div>

            </div>

        </>
    )
}

export default App
