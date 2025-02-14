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
    saveExpense(expense) // toDo
    renderExpense(expense) // toDo
    updateTotal() // toDo

    $expenseName.value = ''
    $expenseAmount.value = ''
  }
})
