// const myAge = 24
// const message = myAge >= 18 ?'You can vote' : 'You cannot vote'
// console.log(message)

const myAge = 24
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler, Porter', 'Sam', 'Regina']
console.log(team.length <= 3 ? `Team Size: ${team.length + 1}` : `Too many people on your team!`)