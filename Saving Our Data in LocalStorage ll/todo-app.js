let todos = []

const filters = {
    searchText: '', 
    hideCompleted: false
}

const todoJSON = localStorage.getItem('todos')

if(todoJSON !== null){
    todos = JSON.parse(todoJSON)
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
        // const todoEl = document.createElement('p')
        // todoEl.textContent = todo.title 

        // if(todo.text.length > 0){
        //     todoEl.textContent = todo.title
        // } else {
        //     todoEl.textContent = 'Unnamed note'
        // }
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
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
