import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg";
import './ProgressionBar.css'

function ProgressionBar({ progressionList, selectedState, changeState }) {

    return (
        <div className='progression'>
            {
                progressionList.map(
                    (state, index) => (
                        <div
                            key={index}
                            className={`step ${index === selectedState ? 'selected' : ''}`}
                        >
                            {state.icon}
                            {state.name}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ProgressionBar