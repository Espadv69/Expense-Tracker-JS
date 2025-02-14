document.addEventListener('DOMContentLoaded', () => {
  // DOM elements
  const $expenseName = document.querySelector('.expenseName')
  const $expenseAmount = document.querySelector('.expenseAmount')
  const $addExpenseBtn = document.querySelector('.addExpense')
  const $expenseList = document.querySelector('.expenseList')
  const $totalAmount = document.querySelector('.totalAmount')

  $addExpenseBtn.addEventListener('click', addExpense)

  function addExpense() {
    const name = $expenseName.value.trim()
    const amount = parseFloat($expenseAmount.value)

    if (!name || isNaN(amount) || amount <= 0) return

    const expense = { name, amount }
    saveExpense(expense)
    renderExpense(expense)
    updateTotal() // toDo

    $expenseName.value = ''
    $expenseAmount.value = ''
  }

  function renderExpense(expense) {
    const $li = document.createElement('li')
    $li.textContent = `${expense.name} - ${expense.amount.toFixed(2)}`

    const $deleteBtn = document.createElement('button')
    $deleteBtn.textContent = '🗑️'
    $deleteBtn.addEventListener('click', () => removeExpense(expense, $li)) // toDo

    $li.appendChild($deleteBtn)
    $expenseList.appendChild($li)
  }

  function saveExpense(expense) {
    const expenses = getExpenses() // toDo
    expenses.push(expense)
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }
})
