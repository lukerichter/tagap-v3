import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg";
import './ProgressionBar.css'

function ProgressionBar({ progressionList, selectedStage }) {

    return (
        <div className='progression'>
            {
                progressionList.map(
                    (stage, index) => (
                        <div
                            key={index}
                            className={`step ${index === selectedStage ? 'selected' : ''}`}
                        >
                            {stage.icon}
                            {stage.name}
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ProgressionBar