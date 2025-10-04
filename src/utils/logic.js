
function checkFile(file) {
    if (file && file.type === "text/csv") {
        return true
    }
    return false
}

function checkDate(datee) {
    if (date) {
        return true
    }
    return false
}


export { checkFile, checkDate }
