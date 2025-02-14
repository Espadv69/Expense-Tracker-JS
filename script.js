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
    const expenses = getExpenses()
    expenses.push(expense)
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }

  function getExpenses() {
    return JSON.parse(localStorage.getItem('expenses')) || []
  }

  function removeExpense(expense, element) {
    let expenses = getExpenses()
    expenses = expenses.filter((e) => e.name !== expense.name || e.amount !== expense.amount)
    localStorage.setItem('expenses', JSON.stringify(expenses))
    element.remove()
    updateTotal() // toDo
  }
})
