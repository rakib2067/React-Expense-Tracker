import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses(props) {
  const [selected, setSelected] = useState("2021");
  const currentSelected = (item) => {
    setSelected(item);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selected;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter current={selected} currentSelected={currentSelected} />
      {filteredExpenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}
