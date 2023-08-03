import React from "react";

const NewExpense = () => {
  console.log("in new expense");
  return (
    <div>
      <form>
        <label> Quantiy of milk bought today </label>
        <input type="number" min="1" step="0.5"></input>
        <label> Date </label>
        <input type="date"></input>
        <button type="submit"> Add new expense </button>
      </form>
    </div>
  );
};

export default NewExpense;
