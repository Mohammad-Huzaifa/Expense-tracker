import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpenseList';
import './Expenses.css'

function Expense(props) {
    const[filteredYear, setFilteredYear] = useState('2022')
    
    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
    
    return(
      <div> 
        <Card className="expenses">
        <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        </Card>
        </div>
      )
}

export default Expense;