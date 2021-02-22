//Multiple arguments
let add = function(a, b){
    return a + b;
}

let result = add(10, 1);
console.log(result);

//Default arguments
let getScoreText = function(name = 'Anonymus', score = 0){
    return 'Name ' + name +' - Score ' + score
}

let scoreText = getScoreText();
console.log(scoreText);

let getTip = function(total, tipPorcent = .1){
    let tip = total * tipPorcent;
    return 'The tip of ' + total + ' is ' +tip;
}

let tip = getTip(200, .2);
console.log(tip);

let name = 'Jen';
console.log(`hi, my name is $(name)`)