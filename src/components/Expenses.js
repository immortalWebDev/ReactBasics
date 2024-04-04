import ExpenseItem from "./ExpenseItem"

function Expenses(props){
  return (
    <div>
      {props.expenses.map((expense, index) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
          ></ExpenseItem>
        );
      })}
      
    </div>
  )
}

export default Expenses