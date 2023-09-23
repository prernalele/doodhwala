import React from "react";
import "./ExpenseListCard.css";

const ExpenseListCard = (props) => {
  return (
    <table className="expenseTable">
      <thead className="tableHeader">
        <tr>
          <th>Year </th>
          <th>Month </th>
          <th>Date </th>
          <th>QUANTITY (in Liters)</th>
        </tr>
      </thead>
      {props.expenseList.map((item) => {
        return (
          <tr>
            <td>{item.date.getFullYear()}</td>
            <td>{item.date.toLocaleString("default", { month: "short" })}</td>
            <td>{item.date.getDate()}</td>
            <td>{item.quantity} </td>
          </tr>
        );
      })}
    </table>
  );
};

export default ExpenseListCard;
