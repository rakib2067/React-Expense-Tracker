import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
  const expenseSubmitHandler = (enteredItem) => {
    const newItem = {
      ...enteredItem,
      id: Math.random().toString(),
    };
    props.onAddExpense(newItem);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSubmit={expenseSubmitHandler} />
    </div>
  );
}
