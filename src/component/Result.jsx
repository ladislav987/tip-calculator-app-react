import React from "react";

const Result = (props) => {
  const {amountOutput,totalAmountOutput } = props;

  const handlerReset = () =>{
    props.onResetClick();
  }
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
        <p id="totalAmountOutput" className="output">
          {totalAmountOutput}
        </p>
      </div>
      <button onClick={handlerReset} className="resetBtn">
        Reset
      </button>
    </>
  );
};

export default Result;
