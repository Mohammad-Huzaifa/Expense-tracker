import ExpenseData from './ExpenseData';
import Card from '../UI/Card'
import './ExpenseItem.css'

function ExpenseItem(props) {
    
    return (
        <li>
        <Card className="expense-item">
           <ExpenseData date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">Rs {props.amount}</div>
            </div>
        </Card>
        </li>
    )
}

export default ExpenseItem;