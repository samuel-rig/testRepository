let myAccount = {
name: 'Samuel Rivera',
expenses: 0,
income: 0
}

let addExpense = function(account, amount){
    account.expenses = account.expenses + amount;
}

let addIncome = function(account, incomes){
    account.income = account.income + incomes;
}

let resetAccount = function(account){
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account){
    let total = account.income - account.expenses;
    return `The account for ${account.name} has $${total}. $${account.income} in incomes and $${account.expenses}`;
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
addExpense(myAccount, 50)
//resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
