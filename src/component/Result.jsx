import React from "react";

const Result = ({
  amountOutput,
  totalAmountPersonOutput,
  totalAmountAllOutput,
  onResetClick,
}) => {
  const handlerReset = () => {
    onResetClick();
  };
  return (
    <>
      <div className="grid">
        <p>
          Tip Amount <br /> / person
        </p>
        <p id="tipAmountOutput" className="output">
          {amountOutput}
        </p>
      </div>
      <div className="grid">
        <p>
          Total <br />/ person
        </p>
        <p id="totalAmountPersonOutput" className="output">
          {totalAmountPersonOutput}
        </p>
      </div>
      <div className="grid">
        <p>Total Amount</p>
        <p id="totalAmountAllOutput" className="output">
          {totalAmountAllOutput}
        </p>
      </div>
      <button onClick={handlerReset} className="resetBtn">
        Reset
      </button>
    </>
  );
};

export default Result;
