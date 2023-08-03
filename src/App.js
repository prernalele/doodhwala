import "./App.css";
import React from "react";
import CustomCalendar from "./Components/CustomCalendar";
import NewExpense from "./Components/NewExpense";
// import Calendar from "./Components/Calendar";

function App() {
  const addExpenseHandler = () => {
    console.log("asdhahda");
    return <NewExpense />;
  };
  return (
    <div className="App">
      <CustomCalendar />
      <NewExpense onClick={addExpenseHandler}> Add New expense </NewExpense>
    </div>
  );
}

export default App;
