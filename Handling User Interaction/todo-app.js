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

const incomplete = todos.filter(function(to){
    return !to.completed
})

const summary = document.createElement('h2')
summary.textContent = `You have ${incomplete.length} things to do left!`
document.querySelector('body').appendChild(summary)


todos.forEach(function(to){
        const todo = document.createElement('p')
        todo.textContent = to.text
        document.querySelector('body').appendChild(todo)
})

document.querySelector('button').addEventListener('click', function(e){
    console.log('Add a todo')
})