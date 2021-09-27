import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
export default function NewExpense(props) {
  const [visible, setVisible] = useState(false);
  let body;
  const expenseSubmitHandler = (enteredItem) => {
    const newItem = {
      ...enteredItem,
      id: Math.random().toString(),
    };
    props.onAddExpense(newItem);
  };
  if (!visible) {
    body = (
      <button onClick={() => setVisible(true)} className="new-expense__actions">
        Add New Expense
      </button>
    );
  } else {
    body = (
      <ExpenseForm
        onClear={() => setVisible(false)}
        onExpenseSubmit={expenseSubmitHandler}
      />
    );
  }

  return <div className="new-expense">{body}</div>;
}
