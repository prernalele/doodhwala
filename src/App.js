import "./App.css";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense";
import ExpenseListCard from "./Components/ExpenseListCard";

function App() {
  const initialExpenses = [
    { quantity: "1", date: "1/1/23" },
    {
      quantity: "2",
      date: "1/1/23",
    },
  ];
  const [expenses, setExpenses] = useState(initialExpenses);

  const clickHandler = (quantity, date) => {
    setExpenses((prevExpense) => {
      return [...prevExpense, { quantity: quantity, date }];
    });
  };
  return (
    <div className="App">
      <NewExpense onSubmitHandler={clickHandler}> Add New expense </NewExpense>
      <p>
        <ExpenseListCard expenseList={expenses} />
      </p>
    </div>
  );
}

export default App;
