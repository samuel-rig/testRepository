const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Sam', 'Rivera', 24)
console.log(me)

const person2 = new Person('Regina', 'Trejo', 21)
console.log(person2)