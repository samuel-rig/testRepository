let temp = 150;
if (temp >= 60 && temp <= 90){
    console.log('It is a nice weather')
} else if (temp <= 0 || temp >= 120){
    console.log('Do not go outside')
} else {
    console.log('do what you want')
}

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan){
    console.log('Only vegan menu')
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log('Offer some vegan options')
} else {
    console.log('Offer anything')
}