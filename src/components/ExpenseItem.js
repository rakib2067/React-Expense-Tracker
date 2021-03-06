import React from "react";
import Date from "./Date";
import "./ExpenseItem.css";
export default function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
