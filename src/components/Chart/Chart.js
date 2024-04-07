import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const expensesOnlyArray = props.chartExpenses.map((monthExpenseData) => {
    return monthExpenseData.price;
  });

  // console.log(expensesOnlyArray)
  const maxVal = Math.max(...expensesOnlyArray);
  // console.log(maxVal)

  const chartData = [
    { expenseMonth: "Jan", expenseValue: 0 },
    { expenseMonth: "Feb", expenseValue: 0 },
    { expenseMonth: "Mar", expenseValue: 0 },
    { expenseMonth: "Apr", expenseValue: 0 },
    { expenseMonth: "May", expenseValue: 0 },
    { expenseMonth: "Jun", expenseValue: 0 },
    { expenseMonth: "Jul", expenseValue: 0 },
    { expenseMonth: "Aug", expenseValue: 0 },
    { expenseMonth: "Sep", expenseValue: 0 },
    { expenseMonth: "Oct", expenseValue: 0 },
    { expenseMonth: "Nov", expenseValue: 0 },
    { expenseMonth: "Dec", expenseValue: 0 },
  ];

  // for (let i = 0; i < props.chartExpenses.length; i++)
  // {
  //     chartData[props.chartExpenses[i].date.getMonth()].expenseValue += props.chartExpenses[i].price
  // }
  // console.log(chartData)

  for (let expense of props.chartExpenses) {
    chartData[expense.date.getMonth()].expenseValue += expense.price;
  }
  // console.log(chartData)

  return (

    <div>
      {chartData.map((monthData) => {
        
        return (
          <ChartBar
            key={monthData.expenseMonth}
            label={monthData.expenseMonth}
            value={monthData.expenseValue}
            maxVal={maxVal}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
