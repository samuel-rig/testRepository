class Hangman{
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    changeStatus() {
        const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

        if (this.guesses === 0){
            this.status = 'failed'
        } else if (finished){
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    get statusMessage() {
        if(this.status === 'playing'){
           return `Guesses left: ${this.guesses}`
        } else if (this.status === 'failed'){
           return `Nice try! The word was "${this.word.join('')}"`
        } else {
           return 'Great work! You guess the word!'
        }
    }
    get puzzle() {
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
    setLetters(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        this.changeStatus()
    
        if(this.status !== 'playing'){
            return
        }
    
        if (isUnique){
            this.guessedLetters.push(guess)
        }
    
        if (isUnique && isBadGuess){
            this.guesses--
        }   
        this.changeStatus()
    }
}

