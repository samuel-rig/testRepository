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

const getThingsTodo = function(todos){
    return toDo.filter(function (todo){
        return !todo.completed
    })
}

const sortTodos = function(toDo) {
    toDo.sort(function(a, b){
        if(!a.completed && b.completed){
            return -1
        }else if (!b.completed == true && a.completed){
            return 1
        } else {
            return 0
        }
        })
}

sortTodos(toDo)
console.log(toDo)

//console.log(getThingsTodo(toDo))

// deleteTodo(toDo, 'walk the dog')
// console.log(toDo)

// toDo.forEach(function(todo, index){
//     const num = index + 1;
//     console.log(`${num}. ${todo}`)
// })

//convert array to array of objects
