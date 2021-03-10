

const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.changeStatus = function(){
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

    // let finished = true

    // this.word.forEach((letter) => {
    //     if(this.guessedLetters.includes(letter)){

    //     } else {
    //         finished = false
    //     }
    // })

    if (this.guesses === 0){
        this.status = 'failed'
    } else if (finished){
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
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

    this.changeStatus()
}

