//Read existing notes from localStorage
const getSavedNotes = function(){
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null){
        return JSON.parse(notesJSON)
    }else{
        return []
    }
}

//Save the notes to localStorage
const savedNotes = function (note){
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Generate the DOM structure for a note
const generateNoteDOM = function(note){
    const noteEl = document.createElement('p')
        noteEl.textContent = note.title 

        if(note.title.length > 0){
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unnamed note'
        }
    return noteEl
    
}

//Render application notes
const renderNotes = function (notes, filters){
    const filterNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach(function(note){
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}