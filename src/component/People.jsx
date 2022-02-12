import React from "react";

const People = (props) => {
  const {people} = props;
  const handlePeopleInputs = (event) => {
    props.onPeopleChange(event.target.value);
  };
  return (
    <>
      <label htmlFor="people">Number of People</label>
      <input
        autoComplete="off"
        className="input input_people"
        type="number"
        id="people"
        name="people"
        value={people}
        onChange={handlePeopleInputs}
      />
    </>
  );
};

export default People;
