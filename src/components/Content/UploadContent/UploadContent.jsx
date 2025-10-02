import { useRef, useState } from 'react'
import { CgSoftwareUpload } from "react-icons/cg";
import './UploadContent.css'

function UploadContent({ upload }) {

    const fileInputRef = useRef(null);
    const [warning, setWarning] = useState(0)

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            upload(file)
        }
    };

    return (
        <div className='content-box' >
            <p>Upload the CSV File</p>
            <div
                className='file-selector'
                onClick={() => fileInputRef.current.click()}
            >
                <p>example.csv</p>
                <div className="file-selector-icon-box">
                    <CgSoftwareUpload />
                </div>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </div>
    )
}

export default UploadContent