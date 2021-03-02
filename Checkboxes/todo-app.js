const todos = [{
    text: 'wash the dishes',
    completed: false
}, {
    text: 'clean the house',
    completed: false
}, {
    text:'walk the dog',
    completed: true
}, {
    text: 'wash clothes',
    completed: false
}, {
    text: 'do excercise',
    completed: true
}]

const filters = {
    searchText: '', 
    hideCompleted: false
}

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

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompletTodos.length} things to do left!`
    document.querySelector('#todos').appendChild(summary)

    filterTodos.forEach(function(todo){
        const p = document.createElement('p')
        p.textContent = todo.text
        document.querySelector('#todos').appendChild(p)
    })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#todo-form').addEventListener('submit', function(e){
    e.preventDefault()
    todos.push({
        text: e.target.elements.newTodo.value,
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
