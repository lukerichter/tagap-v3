import { useState } from 'react'
import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg"

import ProgressionBar from './components/ProgressionBar/ProgressionBar'
import UploadContent from './components/Content/UploadContent/UploadContent'
import DateContent from './components/Content/DateContent/DateContent.jsx'
import PreviewContent from './components/Content/PreviewContent/PreviewContent.jsx'
import SaveContent from './components/Content/SaveContent/SaveContent.jsx'
import Navigation from './components/Navigation/Navigation.jsx'

import './App.css'

import { checkDate } from './utils/logic.js'
import { previewTable, readFile, runEvaluation } from './utils/evaluation.js'


function App() {

    const [data, setData] = useState(null)
    const [date, setDate] = useState(new Date())
    const [stage, setStage] = useState(0)
    const [errors, setErrors] = useState([])
    const [lockDate, setLockDate] = useState(false)

    function nextStage() {
        setStage(Math.min(stages.length - 1, stage + 1))
    }

    function prevStage() {
        setStage(Math.max(0, stage - 1))
    }

    async function handleFileParse(file) {
        try {
            setData(await readFile(file))
        } catch (err) {
            setData(null)
            console.error("Error:", err)
        }
    }

    const stages = [
        { // File selector
            content: <UploadContent upload={handleFileParse} />,
            icon: <CgSoftwareUpload />,
            name: "Upload",
            prevFunction: null,
            nextFunction: nextStage,
            prevCondition: () => true,
            nextCondition: () => data
        },
        { // Date picker
            content: <DateContent preDate={date} changeDate={setDate} setLockDate={setLockDate} />,
            icon: <CgCalendarDates />,
            name: "Date Picker",
            prevFunction: prevStage,
            nextFunction: () => { nextStage(), setErrors(previewTable(data)) },
            prevCondition: () => !lockDate,
            nextCondition: () => !lockDate && checkDate(date)
        },
        { // Table Checker / Preview
            content: <PreviewContent errors={errors} />,
            icon: <CgEye />,
            name: "Review",
            prevFunction: prevStage,
            nextFunction: () => { nextStage(), runEvaluation(data, date) },
            prevCondition: () => true,
            nextCondition: () => errors.length === 0
        },
        { // Evaluation and save file
            content: <SaveContent />,
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
