const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people =[{
    name: 'Sam',
    age: 24
}, {
    name: 'Marina',
    age: 24
}, {
    name: 'Regina',
    age: 21 
}]

// const under30 = people.filter(function(person){
//     return person.age < 30
// })

const under30 = people.filter((person) =>  person.age < 30)

console.log(under30)

const person = people.find((person) => person.age === 21)
console.log(person.name)