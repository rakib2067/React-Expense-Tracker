import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { title: "Car Insurance", amount: 300, date: new Date(2021, 2, 28) },
    { title: "Health Insurance", amount: 250, date: new Date(2011, 3, 15) },
    { title: "Dental Insurance", amount: 3000, date: new Date(2019, 5, 9) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
