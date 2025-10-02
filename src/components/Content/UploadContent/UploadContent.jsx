import { useRef, useState } from 'react'
import { CgSoftwareUpload } from "react-icons/cg";
import './UploadContent.css'

function UploadContent({ upload }) {

    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            upload(file)

        }
    };

    return (
        <>
            <p>Upload the CSV, XLS or XLSX File</p>

            <button
                className='button file-selector'
                onClick={() => fileInputRef.current.click()}
            >
                <p>example.csv</p>
                <CgSoftwareUpload />

            </button>

            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
            />
        </>
    )
}

export default UploadContent