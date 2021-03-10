const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const word1 = new Hangman('Cat', 2)

puzzleEl.textContent = word1.getPuzzle()
guessEl.textContent = word1.guesses
console.log(word1.status)

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    word1.setLetters(guess)
    puzzleEl.textContent = word1.getPuzzle()
    guessEl.textContent = word1.guesses
    console.log(word1.status)
})