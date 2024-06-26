import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"


// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

function ExpenseItem(props) {
  // const month = months[props.date.getMonth()];
  // const year = props.date.getFullYear();
  // const date = props.date.getDate();
  return (
    <div className="expense-item">
      {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div> */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
