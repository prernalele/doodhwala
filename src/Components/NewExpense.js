import React, { useState } from "react";
import Button from "./Button";
import "./newExpense.css";

const NewExpense = (props) => {
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState();
  const handlerFunction = (event) => {
    setQuantity(event.target.value);
    props.onSubmitHandler();
  };
  return (
    <div className="wrapper">
      <form onSubmit={(event) => handlerFunction(event)}>
        <p>
          <label> Quantiy of milk bought today </label>
          <input type="number" min="1" step="0.5"></input>
        </p>
        <p>
          <label> Date </label>
          <input type="date"></input>
        </p>
        <Button />
      </form>
    </div>
  );
};

export default NewExpense;
