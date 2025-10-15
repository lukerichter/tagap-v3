import Papa from "papaparse"
import { dataMap, disciplines, Person, maleList, femaleList, TableError, invalidList } from './config'
import lookup from "./table"
import { checkDate } from "./logic"

function previewTable(data) {

    const errors = []
    const allDiscCols = disciplines.map((disc) => disc.cols).flat()

    data.forEach((row, index) => {
        const rowi = index + 2

        // Check gender value
        const allGenderStrings = maleList.concat(femaleList)
        const genderValue = format(row[dataMap.gender])

        if (!allGenderStrings.includes(genderValue)) {
            errors.push(
                new TableError(rowi, dataMap.gender, genderValue)
            )
        }

        // Check birthday value
        const dateValue = row[dataMap.date]
        if (!checkDate(new Date(dateValue))) {
            errors.push(
                new TableError(rowi, dataMap.date, dateValue)
            )
        }

        // Check discipline values
        allDiscCols.forEach((disc) => {
            const numberValue = format(row[disc])
            if (!isValidNumber(numberValue) && !invalidList.includes(numberValue)) {
                errors.push(
                    new TableError(rowi, disc, numberValue)
                )
            }
        })
    })

    return errors

}

function isValidNumber(value) {
    if (typeof value === 'number') {
        return Number.isFinite(value);
    }

    if (typeof value === 'string' && value.trim() !== '') {
        const num = Number(value);
        return Number.isFinite(num);
    }

    return false
}

function readFile(file) {

    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                resolve(results.data)
            },
            error: (err) => reject(err),
        })
    })
}


function runEvaluation(data, date) {

    const evalList = []
    data.forEach(pers => {
        evalList.push(evalPerson(pers, date))
    })

    console.log(evalList);

}

function evalPerson(data, date) {

    const person = new Person()
    person.name = data[dataMap.name]
    person.height = data[dataMap.height]
    person.school = data[dataMap.school]
    person.age = getAge(data, date)
    person.gender = getGender(data)

    // there are only tables for an age between 7 and 10. 
    // Therefor the age is restricted to this as followed
    const tableAge = person.age > 10 ? 10 : (person.age < 7 ? 7 : person.age)
    const table = lookup[person.gender][tableAge]

    disciplines.forEach(discipline => {
        const { score, val } = evalDiscipline(discipline, data, table[discipline.name])
        person[discipline.name].value = val ?? '-' // undefined will be replaced with '-'
        person[discipline.name].points = score
        person.sum += score
    })

    return person
}

function evalDiscipline(discipline, data, col) {

    const val = getDisiplineValue(discipline, data)
    let score = 0

    const condition = discipline.moreIsBetter ?
        () => col[score] < val :
        () => col[score] > val

    while (score < 30 && condition()) {
        score += 1
    }

    return { score, val }

}

function getDisiplineValue(discipline, data) {

    let best

    discipline.cols.forEach(col => {

        const val = data[col]

        if (val === '-') {
            return
        }
        if (discipline.moreIsBetter) {
            if (best == undefined) {
                best = val
            }
            best = (val >= best) ? val : best
        } else {
            if (best == undefined) {
                best = val
            }
            best = (val <= best) ? val : best
        }
    })
    return best
}

function getAge(data, date) {

    const birthday = new Date(data[dataMap.date])
    const diff = date - birthday

    // This is not exact, but good enough for this application
    const age = diff / (1000 * 60 * 60 * 24 * 365.25)

    // This floors the age to the next .5 or .0 
    return Math.floor(age) + ((age % 1) >= 0.5 ? 0.5 : 0)
}

function getGender(data) {

    const val = data[dataMap.gender].toLowerCase().trim()

    if (maleList.includes(val)) {
        return 'm'
    }

    if (femaleList.includes(val)) {
        return 'w'
    }
}

function format(val) {
    return val.toLowerCase().replace(' ', '').replace(',', '.')
}

export { previewTable, readFile, runEvaluation }