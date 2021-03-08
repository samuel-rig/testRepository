const Hangman = function (word, guesses) {
    this.word = word
    this.guesses = guesses
}

const word1 = new Hangman('Mouse', 3)
console.log(word1)

const word2 = new Hangman('Keybord', 4)
console.log(word2)