const account = {
    name: 'Sam Rivera',
    expenses: [],
    addExpense: function (description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function (){
        let totalExpenses = 0
        let totalIncomes = 0
        let balance = 0
        
        this.expenses.forEach(function (expense){
           totalExpenses = totalExpenses + expense.amount
        })

        this.income.forEach(function (incom){
            totalIncomes = totalIncomes + incom.amount
         })

        balance = totalIncomes - totalExpenses
        return `${this.name} has a balance of $${balance}. $${totalIncomes} in incomes. $${totalExpenses} in expenses`
    },
    income: [],
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
