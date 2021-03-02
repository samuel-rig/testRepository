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

// const incomplete = todos.filter(function(to){
//     return !to.completed
// })
const filters = {
    searchText: ''
}

const renderTodos = function(todos, filters){
    const filterTodos = todos.filter(function (todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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

document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('Add a todo')
})

document.querySelector('#todo-text').addEventListener('input', function(e){
    console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})