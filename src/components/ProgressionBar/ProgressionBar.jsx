import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg";
import './ProgressionBar.css'

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

export default ProgressionBar