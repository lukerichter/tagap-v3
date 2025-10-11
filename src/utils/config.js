
class TableError {
    constructor(row, col, val) {
        this.row = row
        this.col = col
        this.val = val
    }
}

const dataMap = {
    name: 'Name',
    school: 'Schule',
    gender: 'Geschlecht',
    date: 'Geb. Datum',
    height: 'Größe',
    age: 'Alter',
    sum: 'Summe',
}

class Person {
    constructor() {
        this.name = '-'
        this.school = '-'
        this.gender = '-'
        this.age = '-'
        this.height = '-'

        this.agility = { value: '-', points: 0 }
        this.throwing = { value: '-', points: 0 }
        this.jumping = { value: '-', points: 0 }
        this.sprinting = { value: '-', points: 0 }
        this.coordination = { value: '-', points: 0 }
        this.stamina = { value: '-', points: 0 }

        this.sum = 0
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

const maleList = ['m', 'j', 'mann', 'männlich', 'junge']
const femaleList = ['f', 'frau', 'w', 'weiblich', 'mädchen']
const invalidList = ['-']

export {
    dataMap,
    disciplines,
    Person,
    maleList,
    femaleList,
    invalidList,
    TableError
}
