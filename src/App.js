import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 300, date: new Date(2021, 2, 28) },
    { title: "Health Insurance", amount: 250, date: new Date(2011, 3, 15) },
    { title: "Dental Insurance", amount: 3000, date: new Date(2019, 5, 9) },
  ];

  return (
    <div>
      {expenses.map((item) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </div>
  );
}

export default App;
