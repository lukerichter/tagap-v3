
function checkFile(file) {
    if (file && file.type === "text/csv") {
        return true
    }
    return false
}

function checkDate(date) {
    if (date && date instanceof Date && !isNaN(date.getTime())) {
        return true
    }
    return false
}

export { checkFile, checkDate}
