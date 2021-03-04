let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
    const id = uuidv4()
    notes.push({
        id: id,
        title: '',
        body: ''
    })
    savedNotes(notes)
    location.assign(`edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})

window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

//Unix Epoch - January 1 1970 00:00:00
const now =new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

const firstDate = new Date('1997 February 01 12:05:40')
const secondDate = new Date('2020 November 13 20:45:01')
const first = firstDate.getTime()
const second = secondDate.getTime()
if (first < second){
    console.log(`${firstDate.toString()} is first than ${secondDate.toString()}`)
} else {
    console.log(`${secondDate.toString()} is first than ${firstDate.toString()}`)
}

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day ofthe month: ${now.getDate()}`)
// console.log(`Hours: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)