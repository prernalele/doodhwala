import "./App.css";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense";
import ExpenseListCard from "./Components/ExpenseListCard";

function App() {
  const initialData = [
    { quantity: 1, date: new Date("2023 Jan 01") },
    {
      quantity: 2,
      date: new Date("2023 Jan 01"),
    },
  ];
  const [data, setData] = useState(initialData);

  const clickHandler = (quantity, date) => {
    setData((prevData) => {
      console.log("quantity", quantity);
      console.log("date", date);
      console.log("prevData", prevData);
      return [...prevData, { quantity: quantity, date: new Date(date) }];
    });
  };
  return (
    <div className="App">
      <NewExpense onSubmitHandler={clickHandler}>Add New expense</NewExpense>
      <p>
        <ExpenseListCard expenseList={data} />
      </p>
    </div>
  );
}

export default App;
