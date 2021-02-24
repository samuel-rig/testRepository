const toDo = ['wash the dishes', 'clean the house', 'walk the dog', 'wash clothes', 'do excercise']

toDo.splice(2, 1)
toDo.push('Clean')
toDo.shift()

console.log(`You have ${toDo.length} to do!`)

toDo.forEach(function(todo, index){
    console.log(`${index + 1}. ${todo}`)
})
