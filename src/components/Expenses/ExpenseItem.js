import React, { useState } from "react";
import Card from "../UI/Card";
import Date from "./Date";
import "./ExpenseItem.css";
export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const handleClick = () => {
    setTitle("This  is title number: " + Math.random());
  };
  return (
    <Card className="expense-item">
      <Date date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
}
