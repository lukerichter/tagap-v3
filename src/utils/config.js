
const dataMap = {
    'name': 'Name',
    'school': 'Schule',
    'gender': 'Geschlecht',
    'date': 'Geb. Datum',
    'height': 'Größe',
    'age': 'Alter',
    'sum': 'Summe',
}

const newPerson = () => {
    return {
        name: '-',
        school: '-',
        gender: '-',
        age: '-',
        height: '-',

        agility: { value: '-', points: 0 },
        throwing: { value: '-', points: 0 },
        jumping: { value: '-', points: 0 },
        sprinting: { value: '-', points: 0 },
        coordination: { value: '-', points: 0 },
        stamina: { value: '-', points: 0 },

        sum: 0,
    }
}



const disciplines = [
    {
        name: 'agility',
        cols: ['Rumpf'],
        moreIsBetter: true
    },
    {
        name: 'throwing',
        cols: ['Ball 1', 'Ball 2', 'Ball 3'],
        moreIsBetter: true
    },
    {
        name: 'stamina',
        cols: ['Ausdauer'],
        moreIsBetter: true
    },
    {
        name: 'sprinting',
        cols: ['Sprint 1', 'Sprint 2'],
        moreIsBetter: false
    },
    {
        name: 'jumping',
        cols: ['Stand 1', 'Stand 2', 'Stand 3'],
        moreIsBetter: true
    },
    {
        name: 'coordination',
        cols: ['Koordination'],
        moreIsBetter: false
    },
]

export {
    dataMap, disciplines, newPerson
}
