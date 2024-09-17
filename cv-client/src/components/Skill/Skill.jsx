import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Skill.css"; 

function Skill() {

  const navigate = useNavigate();
  // this is used to store the initial and increase inputs and its data
  const [inputs, setInputs] = useState([{ id: Date.now(), value: "" }]);

  // Function to change input values
  //we just mapped through each of the inputs present 
  //rn and then compare the id and chnage its value else return as it is
  const handleChange = (id, event) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, value: event.target.value } : input
      )
    );
  };

  // we just used spread to make the copy of prevoius all
  // and just add a new one
  const addInputField = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  const handleSubmitSkill = ()=>{
    localStorage.setItem("skills",JSON.stringify(inputs));
    navigate('/education')
  }

  return (
    <div className="skill-container">
      <h1 className="skill-title">Your Skills</h1>

      {inputs.map((input) => (
        <input
          key={input.id}
          type="text"
          value={input.value}
          onChange={(event) => handleChange(input.id, event)}
          className="skill-input"
          placeholder="Enter your skill"
        />
      ))}

      <button onClick={addInputField} className="add-input-button">
        Add Skill Slot
      </button>
      <button className="submit-button" onClick={handleSubmitSkill} >Submit</button>
    </div>
  );
}

export default Skill;
