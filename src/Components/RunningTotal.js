import React from "react";

const RunningTotal = (props) => {
  let total = 0;
  return (
    <React.Fragment>
      <h3> Total quanity </h3>
      <p>
        {props.data.map((dataPoint) => {
          return Number(dataPoint.quantity) + total;
        })}
      </p>
    </React.Fragment>
  );
};

export default RunningTotal;
