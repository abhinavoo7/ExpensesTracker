import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react'

function ExpenseItem(props: Props) {
  const [title, setTitle] = useState(props.title)

  const clickhandler = () => {
    console.log('Button clicked!')
    setTitle('Updated Title!!')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        onClick={clickhandler}
        className="expense-item_btn btn btn-outline-light"
      >
        Change Title
      </button>
    </Card>
  )
}

export default ExpenseItem

interface Props {
  id?: string
  title: string
  amount: number
  date: Date
}