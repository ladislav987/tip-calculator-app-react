import React from "react";

const Tips = (props) => {
  const { customPercent } = props;

  const handleTipInputs = (event) => {
    let button = event.target;
    props.onTipsClick(button.value, button.id);
  };
  const handleCustomTipInputs = (event) => {
    let button = event.target;
    props.onCustomTipsChange(button.value, button.id);
  };
  return (
    <>
      <button
        onClick={handleTipInputs}
        className="fivePercent"
        id="fivePercentId"
        value="20"
      >
        5%
      </button>
      <button
        onClick={handleTipInputs}
        className="tenPercent"
        id="tenPercentId"
        value="10"
      >
        10%
      </button>
      <button
        onClick={handleTipInputs}
        className="fifteenPercent"
        id="fifteenPercentId"
        value="6.666666"
      >
        15%
      </button>
      <button
        onClick={handleTipInputs}
        className="twentyFivePercent"
        id="twentyFivePercentId"
        value="4"
      >
        25%
      </button>
      <button
        onClick={handleTipInputs}
        className="fiftyPercent"
        id="fiftyPercentId"
        value="2"
      >
        50%
      </button>

      <input
        className="input input_percent"
        type="number"
        id="customPercent"
        name="percent"
        value={customPercent}
        placeholder="custom"
        onChange={handleCustomTipInputs}
      />
    </>
  );
};

export default Tips;
