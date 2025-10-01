import { CgSoftwareUpload, CgCalendarDates, CgEye, CgSoftwareDownload } from "react-icons/cg";
import './ProgressionBar.css'

function ProgressionBar({ selectedState, changeState }) {

    const statesList = [
        {
            icon: <CgSoftwareUpload />,
            state: "Upload"
        },
        {
            icon: <CgCalendarDates />,
            state: "Pick Date"
        },
        {
            icon: <CgEye />,
            state: "Review"
        },
        {
            icon: <CgSoftwareDownload />,
            state: "Pick Date"
        }
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
                            <p>{state.state}</p>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default ProgressionBar