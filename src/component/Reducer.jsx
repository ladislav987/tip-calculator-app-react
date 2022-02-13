const Reducer = (state, { type, payload }) => {
  if (type === "SET_BILL_INPUT") {
    return {
      ...state,
      bill: payload,
    };
  }

  if (type === "SET_TIP_INPUT") {
    return {
      ...state,
      percent: payload,
    };
  }
  if (type === "SET_CUSTOM_TIP_INPUT") {
    return {
      ...state,
      customPercent: payload,
    };
  }

  if (type === "SET_PEOPLE_INPUT") {
    return {
      ...state,
      people: payload,
    };
  }
  if (type === "SET_AMOUNT_OUTPUT") {
    return {
      ...state,
      amountOutput: payload,
    };
  }
  if (type === "SET_TOTAL_AMOUNT_OUTPUT") {
    return {
      ...state,
      totalAmountAllOutput: payload,
    };
  }

  if (type === "SET_TOTAL_AMOUNT_PERSON_OUTPUT") {
    return {
      ...state,
      totalAmountPersonOutput: payload,
    };
  }

  if (type === "RESET") {
    return {
      ...state,
      people: 1,
      bill: "",
      percent: 1,
      customPercent: "",
    };
  }

  throw new Error("no matching action type sir developer, action: ");
};

export default Reducer;
