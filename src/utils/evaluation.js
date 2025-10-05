import Papa from "papaparse"
import { dataMap, disciplines, newPerson } from './config'
import lookup from "./table"


function previewTable(data) {
    
}



function evaluation(file, date) {

    date = new Date() // TODO: remove this!

    Papa.parse(file, {
        header: true,
        complete: function (results) {
            evalAll(results.data, date)
        },
        error: (err) => {
            console.error("Error parsing CSV:", err)
        }
    })
}


function evalAll(data, date) {

    const evalList = []
    data.forEach(pers => {
        evalList.push(evalPerson(pers, date))
    })

    console.log(evalList);

}

function evalPerson(data, date) {

    const person = newPerson()
    person.name = data[dataMap.name]
    person.height = data[dataMap.height]
    person.school = data[dataMap.school]
    person.age = getAge(data, date)
    person.gender = getGender(data)

    const table = lookup[person.gender][person.age > 10 ? 10 : person.age]

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

    if (['m', 'j', 'mann', 'männlich', 'junge'].includes(val)) {
        return 'm'
    }

    if (['f', 'frau', 'w', 'weiblich', 'mädchen'].includes(val)) {
        return 'w'
    }

    return null
}

function format(val) {
    return val.toLowerCase().trim().replace(',', '.')
}

export default evaluation