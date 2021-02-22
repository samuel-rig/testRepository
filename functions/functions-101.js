// Function input, code, outpuut

let greetUser = function(){
console.log('Welcome user')
}

greetUser();

let square = function (num){
    let result = num * num;
    return result;
}

let value = square(3);

console.log(value);

let convertFahrenheitToCelsius = function(temp){
    let celsius = (temp -32) / 1.8000;
    return celsius;
}

let temperature = convertFahrenheitToCelsius(32);
console.log(temperature);