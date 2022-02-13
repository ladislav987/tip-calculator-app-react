import React from "react";

const Bill = ({ bill, onBillChange }) => {

  const handleBillInput = (event) => {
    onBillChange(event.target.value);
  };
  return (
    <>
      <label htmlFor="amount">Bill</label>
      <input
        autoComplete="off"
        className="input input_dollar"
        type="number"
        id="amount"
        name="amount"
        value={bill}
        placeholder="0"
        onChange={handleBillInput}
        required
      />
    </>
  );
};

export default Bill;
