import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: Math.random().toString(),
    title: "Car Insurance",
    amount: 300,
    date: new Date(2021, 2, 28),
  },
  {
    id: Math.random().toString(),
    title: "Health Insurance",
    amount: 250,
    date: new Date(2021, 3, 15),
  },
  {
    id: Math.random().toString(),
    title: "Dental Insurance",
    amount: 3000,
    date: new Date(2019, 5, 9),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const addExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
