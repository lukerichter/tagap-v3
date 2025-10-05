import { useState } from 'react'
import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg";
import ProgressionBar from './components/ProgressionBar/ProgressionBar'
import UploadContent from './components/Content/UploadContent/UploadContent'
import DateContent from './components/Content/DateContent/DateContent.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import './App.css'
import { checkFile, checkDate } from './utils/logic.js'
import evaluation from './utils/evaluation.js'


function App() {

    const [file, setFile] = useState(null)
    const [lockDate, setLockDate] = useState(false)
    const [date, setDate] = useState(new Date())
    const [stage, setStage] = useState(0)


    function nextStage() {
        setStage(Math.min(stages.length - 1, stage + 1))
    }

    function prevStage() {
        setStage(Math.max(0, stage - 1))
    }

    function runEvalutation() {
        evaluation(file, date)
    }


    const stages = [
        {
            content: <UploadContent upload={setFile} />,
            icon: <CgSoftwareUpload />,
            name: "Upload",
            prevFunction: null,
            nextFunction: nextStage,
            prevCondition: () => true,
            nextCondition: () => checkFile(file)
        },
        {
            content: <DateContent preDate={date} changeDate={setDate} setLockDate={setLockDate} />,
            icon: <CgCalendarDates />,
            name: "Date Picker",
            prevFunction: prevStage,
            nextFunction: runEvalutation,
            prevCondition: () => !lockDate,
            nextCondition: () => !lockDate && checkDate(date)
        },
        {
            // content: <DateContent />,
            icon: <CgEye />,
            name: "Review",
            prevFunction: prevStage,
            nextFunction: nextStage,
            prevCondition: () => true,
            nextCondition: () => true
        },
        {
            // content: <DateContent />,
            icon: <CgSoftwareDownload />,
            name: "Save",
            prevFunction: prevStage,
            nextFunction: null,
            prevCondition: () => true,
            nextCondition: () => true
        }
    ]

    const progressionList = stages.map(({ icon, name }) => ({ icon, name }))

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
                        prevAllowed={stages[stage].prevCondition()}
                        nextFunction={stages[stage].nextFunction}
                        prevFunction={stages[stage].prevFunction}
                    />

                </div>

            </div>

        </>
    )
}

export default App
