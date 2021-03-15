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

getPuzzle('2', (error, puzzle) => {
    if(error) {
        console.log(`Error ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry('MX', (error, country) =>{
    if (error) {
        console.log(error)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})

