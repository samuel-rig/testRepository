let num = 183.941;

//get many decimals
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 1;
let max = 5;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum)

let guessNum = function(num){
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum === num
}

console.log(guessNum(2))