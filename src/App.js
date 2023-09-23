import "./App.css";
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense";
import ExpenseListCard from "./Components/ExpenseListCard";
import RunningTotal from "./Components/RunningTotal";

function App() {
  const initialData = [
    { quantity: 2, date: new Date("2023 Jan 01") },
    {
      quantity: 2,
      date: new Date("2023 Jan 01"),
    },
  ];
  const [data, setData] = useState(initialData);

  const clickHandler = (quantity, date) => {
    setData((prevData) => {
      return [
        ...prevData,
        { quantity: Number(quantity), date: new Date(date) },
      ];
    });
  };
  return (
    <div className="App">
      <NewExpense onSubmitHandler={clickHandler}>Add New expense</NewExpense>
      <ExpenseListCard expenseList={data} />
      <RunningTotal data={data} />
    </div>
  );
}

export default App;
