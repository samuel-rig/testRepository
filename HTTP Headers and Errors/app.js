// HTTP (Hypertext Transfer Protocol)
// Request - What we wany yo do
// Response - What was actually done
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

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200){
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4){
        console.log('An error has taken place')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()