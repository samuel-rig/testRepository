'use strict'

const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const removeEl = document.querySelector('#remove-note')
const dateEl = document.querySelector('#last-edited')
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note){
    location.assign('index.html')
}

titleEl.value = note.title
bodyEl.value = note.body
dateEl.textContent = generateLastEdited(note.updatedAt)

titleEl.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes)
})

bodyEl.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    dateEl.textContent = generateLastEdited(note.updatedAt)
    savedNotes(notes)
})

removeEl.addEventListener('click', (e) => {
    removeNote(note.id)
    savedNotes(notes)
    location.assign('index.html')
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteId)
        
        if (!note){
            location.assign('index.html')
        }
        
        titleEl.value = note.title
        bodyEl.value = note.body
        dateEl.textContent = generateLastEdited(note.updatedAt)
    }
})
