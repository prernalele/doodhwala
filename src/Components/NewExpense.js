import React, { useState } from "react";
import Button from "./Button";
import "./newExpense.css";

const NewExpense = (props) => {
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState(new Date(""));
  const handlerFunction = (event) => {
    event.preventDefault();
    console.log("date", date);
    console.log("quantity", quantity);
    props.onSubmitHandler(quantity, date);
  };
  const onQuantityChange = (event) => {
    event.preventDefault();
    setQuantity(event.target.value);
  };

  const onDateChange = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };
  return (
    <div className="wrapper">
      <form onSubmit={(event) => handlerFunction(event)}>
        <p>
          <label> Quantiy of milk bought today </label>
          <input
            type="number"
            min="1"
            step="0.5"
            onChange={onQuantityChange}
            value={quantity}
          ></input>
        </p>
        <p>
          <label> Date </label>
          <input type="date" onChange={onDateChange} value={date}></input>
        </p>
        <Button />
      </form>
    </div>
  );
};

export default NewExpense;
