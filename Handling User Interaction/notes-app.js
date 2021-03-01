const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Excercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

document.querySelector('button').addEventListener('click', function(e){
    console.log('It works')
    e.target.textContent = 'The buton was clicked'
})