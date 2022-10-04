import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props: Props) => {
  const saveExpenseDataHandler = (enteredExpenseData: ExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    console.log(expenseData.amount)
    console.log(expenseData.title)
    console.log(expenseData)
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense

interface ExpenseData {
  id?: string
  title: string
  amount: number
  date: Date
}

interface Props {
  onAddExpense: (expenseData: ExpenseData) => void
}
