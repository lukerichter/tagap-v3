import { CgSoftwareUpload } from "react-icons/cg";
import './Content.css'



function UploadContent() {
    return (
        <div className='content--box'>
            <p>Upload the CSV File</p>
            <div
                className='content--file-selector'
                onClick={() => { }}
            >
                <p>example.csv</p>
                <CgSoftwareUpload />
            </div>
        </div>
    )
}

function DateContent() {
    return (
        <div>
            Date Picker Content
        </div>
    )
}

function ReviewContent() {
    return (
        < div >
            Review Content
        </div >
    )
}

function DownloadContent() {
    return (
        <div>
            Download Content
        </div>
    )
}


function Content({ currentState }) {
    const steps = [
        <UploadContent />,
        <DateContent />,
        <ReviewContent />,
        <DownloadContent />,
    ]

    return (
        <div className='content'>
            {steps[currentState]}
        </div>
    )

}

export default Content