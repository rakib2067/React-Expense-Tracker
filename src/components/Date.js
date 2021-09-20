import React from "react";
import "./Date.css";
export default function Date(props) {
  const joinedDate = props.date.toDateString().split(" ");

  return (
    <div className="expense-date">
      <div className="expense-date__month">{joinedDate[1]}</div>
      <div className="expense-date__year">{joinedDate[3]}</div>
      <div className="expense-date__day">{joinedDate[0]}</div>
    </div>
  );
}
