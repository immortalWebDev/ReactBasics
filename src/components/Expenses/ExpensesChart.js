import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
// console.log(props.chartData)

return (
    <div>
        <Chart chartExpenses={props.filteredExpensesForChart}></Chart>
    </div>
)
}

export default ExpensesChart