let name = 'Samuel Rivera'

//length property
console.log(name.length);

//convert to upper cas
console.log(name.toUpperCase());

//convert to lower case
console.log(name.toLowerCase());

//Includes method
let password = 'abc123asdf098';
console.log(password.includes('password'));

//trim delete spaces
console.log(name.trim());

let isValidPass = function(pass){
    return pass.length >= 8 && pass.includes('password');
}

console.log(isValidPass('asdfgh'));
console.log(isValidPass('asdfghjkldpa'));
console.log(isValidPass('abcpasswordas'))