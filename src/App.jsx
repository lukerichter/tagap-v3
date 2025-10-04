import { useEffect, useState } from 'react'
import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg";
import ProgressionBar from './components/ProgressionBar/ProgressionBar'
import UploadContent from './components/Content/UploadContent/UploadContent'
import Navigation from './components/Navigation/Navigation.jsx';
import './App.css'
import { checkFile, checkDate } from './utils/logic.js'


function App() {

    const [file, setFile] = useState(null)
    const [date, setDate] = useState(null)
    const [stage, setStage] = useState(0)


    function nextStage() {
        setStage(Math.min(stages.length - 1, stage + 1))
    }

    function prevStage() {
        setStage(Math.max(0, stage - 1))
    }

    function uploadNext() {
        nextStage()
    }


    const stages = [
        {
            content: <UploadContent upload={setFile} />,
            icon: <CgSoftwareUpload />,
            name: "Upload",
            prevFunction: null,
            nextFunction: uploadNext,
            nextCondition: () => true //(file && checkFile(file))
        },
        {
            // content: <DateContent />,
            icon: <CgCalendarDates />,
            name: "Date Picker",
            prevFunction: prevStage,
            nextFunction: nextStage,
            nextCondition: () => true //(date && checkDate(date))
        },
        {
            // content: <DateContent />,
            icon: <CgEye />,
            name: "Review",
            prevFunction: prevStage,
            nextFunction: nextStage,
            nextCondition: () => true
        },
        {
            // content: <DateContent />,
            icon: <CgSoftwareDownload />,
            name: "Save",
            prevFunction: prevStage,
            nextFunction: null,
            nextCondition: () => true
        }
    ]

    const progressionList = stages.map(({ icon, name }) => ({ icon, name }))

    useEffect(() => {
        console.log("File changed:", file);
    }, [file]);

    return (
        <>
            <div className='container'>

                <div className="app">

                    <ProgressionBar
                        progressionList={progressionList}
                        selectedStage={stage}
                    />

                    <div className='app--content'>
                        {stages[stage].content}
                    </div>

                    <Navigation
                        nextAllowed={stages[stage].nextCondition()}
                        nextFunction={stages[stage].nextFunction}
                        prevFunction={stages[stage].prevFunction}
                    />

                </div>

            </div>

        </>
    )
}

export default App
