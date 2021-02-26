const toDo = [{
    text: 'wash the dishes',
    completed: true
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

const deleteTodo = function (todos, todoText) {
    const index =toDo.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        toDo.splice(index, 1)
    }
}

deleteTodo(toDo, 'walk the dog')
console.log(toDo)

// toDo.forEach(function(todo, index){
//     const num = index + 1;
//     console.log(`${num}. ${todo}`)
// })

//convert array to array of objects
