import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Accomplish.css";

function Accomplish() {
  const navigate = useNavigate();

  const [acc, setAcc] = useState([{ id: Date.now(), value: "" }]);

  const handleDataFill = (id, event) => {
    setAcc(
      acc.map((input) =>
        input.id === id ? { ...input, value: event.target.value } : input
      )
    );
  };

  const handleIncrease = () => {
    setAcc((prevState) => [...prevState, { id: Date.now(), value: "" }]);
  };

  const handleNext = ()=>{
    localStorage.setItem("acc",JSON.stringify(acc));
    navigate('/cv');
  }

  return (
    <>
      <div>
        <h1>Accomplish</h1>
      </div>
      {acc.map((input) => (
        <input
          key={input.id}
          value={input.value}
          onChange={(event) => handleDataFill(input.id, event)}
          placeholder="Enter your accomplishments here"
          type="text"
        />
      ))}
      <button onClick={handleIncrease}>Add Acc Slot</button>
      <button  onClick={handleNext}>Submit Acc</button>
    </>
  );
}

export default Accomplish;
