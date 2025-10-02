import { useState } from "react";


function useFile() {
    const [file, setFile] = useState(null)

    function uploadFile(file) {
        setFile(file)
    }

    function resetFile() {
        setFile(null)
    }

    return {
        uploadFile,
        resetFile
    }
}



export default useFile
