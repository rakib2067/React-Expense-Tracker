import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredList={filteredExpenses} />
    </Card>
  );
}
