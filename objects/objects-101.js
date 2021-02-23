let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'Animal farm'

console.log(`${myBook.title} by ${myBook.author}`);

//name, age, location
let person = {
    name: 'Sam',
    age: 24,
    location: 'San Luis Potosí'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
person.age = person.age + 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
