import React from "react";

const ExpenseListCard = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>QUANTITY (in Liters)</th>
          <th>Date </th>
          <th>Month </th>
          <th>Year </th>
        </tr>
      </thead>
      {props.expenseList.map((item) => {
        return (
          <tr>
            <td>{item.quantity} </td>
            <td>{item.date.getDate()}</td>
            <td>{item.date.toLocaleString("default", { month: "long" })}</td>
            <td>{item.date.getFullYear()}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default ExpenseListCard;
