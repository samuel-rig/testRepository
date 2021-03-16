'use strict'

//Fetch exisiting todos from localStorage
const getSavedTodos = () => {
    const todoJSON = localStorage.getItem('todos')
    try {
        return todoJSON ? JSON.parse(todoJSON) : []
    } catch (error) {
        return []
    }
}

//Save todos to localStorage
const saveTodos = (todo) => localStorage.setItem('todos', JSON.stringify(todo))

//Render todos based in filters
const renderTodos = (todos, filters) => {
    const todoEl =  document.querySelector('#todos')
    const filterTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    const incompletTodos = filterTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompletTodos))

    if (filterTodos.length > 0) {
        filterTodos.forEach((todo) => todoEl.appendChild(generateTodoDOM(todo)))
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'No to-dos to show'
        todoEl.appendChild(messageEl)
    }
}

//Remove todo by Id
const removeTodos = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

//Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo){
        todo.completed = !todo.completed
    }
}

//Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoText =document.createElement('span')
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const removeButton = document.createElement('button')
    const checkbox = document.createElement('input')

    //Setup checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    //Setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    //Setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    //Setup the remove button
    removeButton.textContent = 'remove'
    removeButton.classList.add('button', 'button--text')
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
        removeTodos(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoEl
}

//Get the DOM elemnts for summary
const generateSummaryDOM = (incompletTodos) => {
    const summary = document.createElement('h2')
    
    const plural = incompletTodos.length === 1 ? '' : 's'
    summary.classList.add('list-title')
    summary.textContent = `You have ${incompletTodos.length} thing${plural} to do left!`
    return summary
}
