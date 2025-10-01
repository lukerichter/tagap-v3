import { useState } from 'react'
import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg";
import './App.css'

function ProgressionBar({ selectedState, changeState }) {

  const statesList = [
    { icon: <CgSoftwareUpload /> },
    { icon: <CgCalendarDates /> },
    { icon: <CgEye /> },
    { icon: <CgSoftwareDownload /> },
  ]

  return (
    <div className='progression'>
      {
        statesList.map(
          (state, index) => (
            <div
              key={index}
              onClick={() => changeState(index)}
              className={`step ${index === selectedState ? 'selected' : ''}`}
            >
              {state.icon}
            </div>
          )
        )
      }
    </div>
  )
}




function App() {

  const [stage, setStage] = useState(0)

  return (
    <div className="container">
      <ProgressionBar selectedState={stage} changeState={setStage} />
    </div>
  )
}

export default App
