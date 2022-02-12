import React, { useState, useEffect } from "react";

import "./App.scss";

import "./scss/buttons.scss";
import "./scss/general.scss";
import "./scss/input.scss";
import "./scss/mediaQuery.scss";
import "./scss/style.scss";

import BillCom from "./component/Bill";
import Tips from "./component/Tips";
import People from "./component/People";
import Result from "./component/Result";

function App() {
  const [bill, setBill] = useState("");
  const [percent, setPercent] = useState(1);
  const [customPercent, setCustomPercent] = useState("");
  const [people, setPeople] = useState(1);

  const [amountOutput, setAmountOutput] = useState(0);
  const [totalAmountOutput, setTotalAmountOutput] = useState();


  useEffect(() => {
    if (people > 0) {
      count(percent, bill, people);
    }
  }, [people, bill, percent, customPercent]);

  const count = (percent, bill, people) => {
    let tipAmountOutputBeforFormat = bill / percent / people;
    let tipAmountOutput = formatUSD(tipAmountOutputBeforFormat);
    let totalAmountOutput = formatUSD(
      bill / people + tipAmountOutputBeforFormat
    );

    setAmountOutput(tipAmountOutput);
    setTotalAmountOutput(totalAmountOutput);
  }

  const formatUSD = (numbers) => {
    let number = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(numbers);
    return number;
  }

  const handleBillChange = (data) => {
    setBill(data);
  };

  const handleTipsChange = (data,id) => {
    setPercent(data);
    activeClass(id);
  };
  const handleCustomTipsChange = (data,id) => {
    setCustomPercent(data);
    setPercent(100 / data);

    activeClass(id);
  };
  const handlePeopleChange = (data) => {
    setPeople(data);
  };

  const handleReset = () => {
    setPeople(1);
    setBill("");
    setPercent(1);
    setCustomPercent("");
  }

  const activeClass = (id) => {
    let elementDelete = document.querySelectorAll(".selectedButton");

    if (elementDelete[0] !== undefined) {
      document
        .getElementById(elementDelete[0].id)
        .classList.remove("selectedButton");
    }

    let elementAdd = document.getElementById(id);
    elementAdd.classList.add("selectedButton");
  }

  return (
    <div className="App">
      <header>
        <h1>Spli</h1>
        <h1>tter</h1>
      </header>

      <main>
        <div className="container_app">
          <div className="container_app_left">
            <BillCom onBillChange={handleBillChange} bill={bill} />
            <div id="button_container">
              <Tips
                onTipsClick={handleTipsChange}
                onCustomTipsChange={handleCustomTipsChange}
                percent={percent}
                customPercent={customPercent}
              />
            </div>
            <People onPeopleChange={handlePeopleChange} people={people} />
          </div>

          <div className="container_app_right">
            <Result
              onResetClick={handleReset}
              amountOutput={amountOutput}
              totalAmountOutput={totalAmountOutput}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
