const puzzleEl = document.querySelector('#puzzle')
const guessEl = document.querySelector('#guesses')
const word1 = new Hangman('Cat', 2)

puzzleEl.textContent = word1.puzzle
guessEl.textContent = word1.statusMessage

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    word1.setLetters(guess)
    puzzleEl.textContent = word1.puzzle
    guessEl.textContent = word1.statusMessage
})