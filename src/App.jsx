import React, { useEffect, useReducer } from "react";

import "./App.scss";

import "./scss/style.scss";
import "./scss/buttons.scss";
import "./scss/general.scss";
import "./scss/input.scss";
import "./scss/mediaQuery.scss";

import BillCom from "./component/Bill";
import Tips from "./component/Tips";
import People from "./component/People";
import Result from "./component/Result";

import reducer from "./component/Reducer";

const defaultState = {
  bill: "",
  percent: 1,
  customPercent: "",
  people: 1,
  amountOutput: 0,
  totalAmountPersonOutput: 0,
  totalAmountAllOutput: 0,
};

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    function count(percent, bill, people) {
      let all = formatUSD(parseInt(bill) + parseInt(bill / percent));
      let tipAmountOutput = formatUSD(bill / percent / people);
      let totalAmountPersonOutput = formatUSD(
        bill / people + bill / percent / people
      );

      dispatch({
        type: "SET_AMOUNT_OUTPUT",
        payload: tipAmountOutput,
      });
      dispatch({
        type: "SET_TOTAL_AMOUNT_PERSON_OUTPUT",
        payload: totalAmountPersonOutput,
      });

      if (all !== "$NaN") {
        dispatch({
          type: "SET_TOTAL_AMOUNT_OUTPUT",
          payload: all,
        });
      }
    }

    count(state.percent, state.bill, state.people);
  }, [state.people, state.bill, state.percent, state.customPercent]);

  const formatUSD = (numbers) => {
    let number = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(numbers);
    return number;
  };

  const handleBillChange = (data) => {
    dispatch({ type: "SET_BILL_INPUT", payload: data });
  };

  const handleTipsChange = (data, id) => {
    dispatch({ type: "SET_TIP_INPUT", payload: data });

    activeClass(id);
  };

  const handleCustomTipsChange = (data, id) => {
    dispatch({ type: "SET_TIP_INPUT", payload: 100 / data });
    dispatch({ type: "SET_CUSTOM_TIP_INPUT", payload: data });

    activeClass(id);
  };
  const handlePeopleChange = (data) => {
    dispatch({ type: "SET_PEOPLE_INPUT", payload: data });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const activeClass = (id) => {
    let elementDelete = document.querySelectorAll(".selectedButton");

    if (elementDelete[0] !== undefined) {
      document
        .getElementById(elementDelete[0].id)
        .classList.remove("selectedButton");
    }

    let elementAdd = document.getElementById(id);
    elementAdd.classList.add("selectedButton");
  };

  return (
    <div className="App">
      <header>
        <h1>Spli</h1>
        <h1>tter</h1>
      </header>

      <main>
        <div className="container_app">
          <div className="container_app_left">
            <BillCom onBillChange={handleBillChange} bill={state.bill} />
            <div id="button_container">
              <Tips
                onTipsClick={handleTipsChange}
                onCustomTipsChange={handleCustomTipsChange}
                percent={state.percent}
                customPercent={state.customPercent}
              />
            </div>
            <People onPeopleChange={handlePeopleChange} people={state.people} />
          </div>

          <div className="container_app_right">
            <Result
              onResetClick={handleReset}
              amountOutput={state.amountOutput}
              totalAmountPersonOutput={state.totalAmountPersonOutput}
              totalAmountAllOutput={state.totalAmountAllOutput}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
