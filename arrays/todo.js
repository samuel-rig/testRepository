const toDo = ['wash the dishes', 'clean the house', 'walk the dog', 'wash clothes', 'do excercise']

//console.log(`You have ${toDo.length} to do`)
//console.log(`To do: ${toDo[0]}`)
//console.log(`To do: ${toDo[toDo.length - 2]}`)

toDo.splice(2, 1)
toDo.push('Clean')
toDo.shift()
console.log(toDo)
