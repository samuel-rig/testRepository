//Fetch exisiting todos from localStorage
const getSavedTodos = function(){
    const todoJSON = localStorage.getItem('todos')

    if(todoJSON !== null){
        return JSON.parse(todoJSON)
    } else {
        return []
    }
}

//Save todos to localStorage
const saveTodos = function (todo ){
    localStorage.setItem('todos', JSON.stringify(todo))
}

//Render todos based in filters
const renderTodos = function(todos, filters){
    const filterTodos = todos.filter(function (todo){
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompletTodos = filterTodos.filter(function(todo){
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompletTodos))

    filterTodos.forEach(function(todo){
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

//Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoText =document.createElement('span')
    const todoEl = document.createElement('div')
    const removeButton = document.createElement('button')
    const checkbox = document.createElement('input')

    //Setup checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    //Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    //Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    return todoEl
}

//Get the DOM elemnts for summary
const generateSummaryDOM = function (incompletTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletTodos.length} things to do left!`
    return summary
}