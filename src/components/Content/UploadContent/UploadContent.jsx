import { useRef, useState } from 'react'
import { CgSoftwareUpload } from "react-icons/cg";
import './UploadContent.css'

function UploadContent({ upload }) {

    const fileInputRef = useRef(null);
    const [filename, setFilename] = useState('')

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            upload(file)
            setFilename(file.name)
        }
    }

    return (
        <>
            <p>Upload the CSV, XLS or XLSX File</p>

            <button
                className='button file-selector'
                onClick={() => fileInputRef.current.click()}
            >
                <p>{filename ? filename : 'example.csv'}</p>
                <CgSoftwareUpload />

            </button>

            <input
                type="file"
                accept=".csv,.xls,.xlsx"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
            />
        </>
    )
}

export default UploadContent