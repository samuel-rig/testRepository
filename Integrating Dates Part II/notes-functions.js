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

//Remove a note from the list
const removeNote = function (id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    })

    if (noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}

//Generate the DOM structure for a note
const generateNoteDOM = function(note){
    const noteEl = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')    

    //Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', function(){
        removeNote(note.id)
        renderNotes(notes, filters)
    })

    //Setup the role tittle text
    if(note.title.length > 0){
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    textEl.setAttribute('href', `edit.html#${note.id}`)
    noteEl.appendChild(textEl)

    return noteEl
    
}

//Sort your notes by one if three ways
const sortNotes = function(notes, sortBy){
    if (sortBy === 'byEdited'){
        return notes.sort(function(a, b){
            if (a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt){
                return 1
            } else {
                0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort(function(a, b){
            if (a.createdAt > b.createdAt){
                return -1
            } else if (a.createdAt < b.createdAt){
                return 1
            } else{
                return 0
            }
        })
    } else if (sortBy === 'alphabetical'){
        return notes.sort(function(a, b){
            if (a.title.toLowerCase() < b.title.toLowerCase()){
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }
}

//Render application notes
const renderNotes = function (notes, filters){
    notes =sortNotes(notes, filters.sortBy)
    const filterNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filterNotes.forEach(function(note){
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)
    })
}

//Generate the last edited message
const generateLastEdited = function (timestamp){
    return `Last edited ${moment(timestamp).fromNow()}`
}