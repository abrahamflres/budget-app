const budgetFormEl = document.querySelector('form')
const expenseForm = document.getElementById('expense-input')

const budgetDisplay = document.getElementById('budget-display')
const expenseDisplay = document.getElementById('expenses-display')
const balanceDisplay = document.getElementById('balance-display')

const clearBtn = document.getElementById('clear-button')
const clearExpenseBtn = document.getElementById('clear-expense-button')


const addExpenseBtn = document.getElementById('expense-button')
const expenseAmount = document.getElementById('expense-amount')

const calcBalanceBtn = document.getElementById('calc-balance')


calcBalanceBtn.addEventListener('click', (event)=>{
    event.preventDefault()

    let expense = expenseDisplay.textContent
    let budget = budgetDisplay.textContent

    let balance = budget - expense
    displayBalance(balance)

})

function displayBalance(balance){
    balanceDisplay.textContent = balance

}








let budget =0
budgetFormEl.addEventListener('click', (event)=>{
    event.preventDefault()
    for(let g = 0; g< 1; g++){
        let entry = Number(budgetFormEl[0].value)
        budget = budget + entry
        displayBudget(budget)
}})
             
clearBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    for(let g = 0; g< 1; g++){
        budgetFormEl[0].value = ''

}})
    

function displayBudget(budget){
    budgetDisplay.textContent = budget
}

let expenses = 0
addExpenseBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    let expenseEntry = Number(expenseAmount.value)
    expenses = expenses + expenseEntry
    displayExpenses(expenses)
    
})


function displayExpenses(expenses){
    expenseDisplay.textContent = expenses
}


clearExpenseBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    for(let g= 0; g< expenseForm.length; g++){
        expenseForm[0].value = ''
        expenseForm[1].value = ''
    }
})























