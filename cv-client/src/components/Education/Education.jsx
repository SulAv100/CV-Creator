import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Education.css";

function Education() {
  const navigate = useNavigate();
  const [expInput, setExpInput] = useState([{ id: Date.now(), value: "" }]);
  const [work, setWork] = useState({
    role: "",
    company: "",
    cLocation: "",
    startDate: "",
    endDate: "" || "Current",
  });

  const handleSubmission = (id, event) => {
    setExpInput(
      expInput.map((input) =>
        input.id === id ? { ...input, value: event.target.value } : input
      )
    );
  };

  const handleWorkData = (event) => {
    setWork((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSlotIncrement = () => {
    setExpInput([...expInput, { id: Date.now(), value: "" }]);
  };

  const handleDataPush = () => {
    localStorage.setItem("work", JSON.stringify(work));
    localStorage.setItem("exp", JSON.stringify(expInput));
    navigate("/edu");
  };

  return (
    <>
      <div>
        <h1>Work History</h1>
      </div>
      <div>
        <input
          type="text"
          name="role"
          onChange={(event) => handleWorkData(event)}
          placeholder="Your role in previous work"
        />
        <input
          type="text"
          name="company"
          onChange={(event) => handleWorkData(event)}
          placeholder="Company name"
        />
        <input
          type="text"
          name="cLocation"
          onChange={(event) => handleWorkData(event)}
          placeholder="Company Location"
        />

        <div>
          <label htmlFor="from">From</label>
          <input
            onChange={(event) => handleWorkData(event)}
            name="startDate"
            type="date"
          />
        </div>
        <div>
          <label htmlFor="from">To</label>
          <input
            onChange={(event) => handleWorkData(event)}
            name="endDate"
            type="date"
          />
        </div>
        <div className="responsibilities">
          <h2>What did you do there?</h2>
          {expInput.map((input) => (
            <input
              type="text"
              placeholder="Enter your work here"
              key={input.id}
              value={input.value}
              onChange={(event) => handleSubmission(input.id, event)}
            />
          ))}
          <button onClick={handleSlotIncrement}>Add exp slot</button>
          <button onClick={handleDataPush}>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Education;
