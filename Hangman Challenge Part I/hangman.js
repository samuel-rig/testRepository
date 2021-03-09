const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['o', 'e', 'm']
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

const word1 = new Hangman('Mouse', 3)
console.log(word1.getPuzzle())

const word2 = new Hangman('Keybord', 4)
console.log(word2.getPuzzle())