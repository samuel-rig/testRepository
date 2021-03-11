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
    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName(){
        return `${this.firsName} ${this.lastName}`
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
    constructor(firstName, lastName, age, grades, likes){
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

const me = new Employee('Sam', 'Rivera', 24, 'Teacher', [])
me.fullName = 'Regina Trejo'
console.log(me.getBio())
