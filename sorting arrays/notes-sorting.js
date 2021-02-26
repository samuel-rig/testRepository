const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Excercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


const sortNotes = function(notes){
    notes.sort(function(a, b){
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes =  function(notes, query){
    return notes.filter(function (notes, noteTitle){
        const isTitleMatch = notes.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = notes.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}

//console.log(findNotes(notes, 'to'))

// const findNote = function (note, noteTitle) {
//     const index = notes.findIndex(function (note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notes, 'some other office modification')
// console.log(note)

// console.log(notes.length);
// console.log(notes)

// const index = notes.findIndex(function(note, index){
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })
// console.log(index)

sortNotes(notes)
console.log(notes)