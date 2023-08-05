import React from "react";

function Calender(props) {
  const { setDate } = props;
  function dataHandler(event) {
    console.log(event.target.value);
    setDate(event.target.value);
  }
  return (
    <div className="calender-div">
      <input type="date" id="date" name="date" onChange={dataHandler} />
    </div>
  );
}
export default Calender;
