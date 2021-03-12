const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const word1 = new Hangman('Cars 2', 2)

puzzleEl.textContent = word1.puzzle
guessEl.textContent = word1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    word1.setLetters(guess)
    puzzleEl.textContent = word1.puzzle
    guessEl.textContent = word1.statusMessage
})

getPuzzle((error, puzzle) => {
    if(error) {
        console.log(`Error ${error}`)
    } else {
        console.log(puzzle)
    }
})


// Making an HTTP request
// 

// const countryCode = 'MX'
// const countryRequest = new XMLHttpRequest()

// countryRequest.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200){
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     }else if (e.target.readyState === 4){
//         console.log('Uneable to fetch data')
//     }
// })

// countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all')
// countryRequest.send()