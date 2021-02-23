let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history',
    author: 'Howars zinn Orwell',
    pageCount: 723
}

let getSummary = function(book){
   return {
       summary: `${book.title} by ${book.author}`,
       pageCountSummary: `${book.title} is ${book.pageCount} pages long`
   }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);

let convert = function(fa){
    return{
        fa: fa,
        celsius: (fa -32) / 1.8000,
        kelvin: (fa +459.67) * (5 / 9)
    }
}

let temp =convert(64);
console.log(temp)