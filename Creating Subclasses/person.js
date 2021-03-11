//Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio(){
        let bio = `${this.firstName} is ${this.age}`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}`
        })
        return bio
    }
    setName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

class Employee extends Person{
    constructor(firstName, lastName, age, position, likes){
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Students extends Person{
    constructor(firstName, lastName, age, likes, grades){
        super(firstName, lastName, age, likes)
        this.grades = grades
    }
    getBio(){
        const status = this.grades >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class`
    }
    updateGrade(change){
        this.grades += change
    }
}

const me = new Students('Sam', 'Rivera', 24, [], 71)
console.log(me.getBio())
me.updateGrade(-2)
console.log(me.getBio())