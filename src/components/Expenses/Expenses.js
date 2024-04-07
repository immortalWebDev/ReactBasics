// // Write your code at relevant places in the code below:

// import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
// import ExpensesFilter from "./ExpensesFilter";
// import "./Expenses.css";
// import Card from "../UI/Card";

// const Expenses = (props) => {
//   const [filteredYear, setFilteredYear] = useState("2023");

//   const changeFilterHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.expenses.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   let expensesContent = <p>No expenses found</p>;

//   if (filteredExpenses.length > 0) {
//     expensesContent = filteredExpenses.map((expense) => {
//       return (
//         <>
//           <ExpenseItem
//             key={expense.id}
//             title={expense.title}
//             date={expense.date}
//             price={expense.price}
//           />
//           {filteredExpenses.length === 1 && (
//           <p>Only one expense found. Please add more</p>
//           )}
//         </>
//       );
//     });
//   }

//   return (
//     <Card className="expenses">
//       <ExpensesFilter
//         selected={filteredYear}
//         onChangeFilter={changeFilterHandler}
//       />
//       {expensesContent}
//     </Card>
//   );
// };

// export default Expenses;



import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart chartData={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
