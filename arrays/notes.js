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

//console.log(notes.pop())
//notes.push('My new item')

//console.log(notes.shift())
//notes.unshift('My first note')

//start at, remove this, rewrite this
//notes.splice(1, 1, 'This is the second new item')

//notes[2] = 'This is the new third item'

//notes.forEach(function(item, index){
//    console.log(index)
//    console.log(item)
//})

console.log(notes.length);
console.log(notes)

const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.title === 'Habbits to work on'
})
console.log(index)