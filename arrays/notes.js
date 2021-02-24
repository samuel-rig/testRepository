const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes.pop())
notes.push('My new item')

console.log(notes.shift())
notes.unshift('My first note')

//start at, remove this, rewrite this
notes.splice(1, 1, 'This is the second new item')

notes[2] = 'This is the new third item'


notes.forEach(function(item, index){
    console.log(index)
    console.log(item)
})

console.log(notes.length);
console.log(notes)

for (let count = 0 ; count <= 2 ; count++) {
    console.log(count);
}

for (let count = notes.length - 1 ; count >= 0 ; count --) {
    console.log(notes[count])
}