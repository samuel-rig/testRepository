

const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(words){
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' '){
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.setLetters = function(guess){
    gess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique){
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess){
        this.guesses--
    }

}

const word1 = new Hangman('Cat', 2)
console.log(word1.getPuzzle())
console.log(word1.guesses)

window.addEventListener('keypress', function(e){
    const guess = String.fromCharCode(e.charCode)
    word1.setLetters(guess)
    console.log(word1.getPuzzle())
    console.log(word1.guesses)
})