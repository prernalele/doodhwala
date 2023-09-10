import React from "react";

const ExpenseListCard = (props) => {
  return (
    <div>
      <h2> Expense List</h2>
      {props.expenseList.map((item) => {
        return (
          <div style={{ borderBottom: "50px" }}>
            <p>{item.date}</p>
            <p>{item.quantity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseListCard;
