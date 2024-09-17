import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Edu.css";

function Edu() {

    const navigate = useNavigate();
  const [eduData, setEduDate] = useState({
    college: "",
    location: "",
    degree: "",
    course: "",
    sDate: "",
    eDate: "",
  });

  const handleEduUpdate = (event) => {
    setEduDate((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  

  const handleLclSubmit = ()=>{
    localStorage.setItem('education',JSON.stringify(eduData));
    navigate('/acc');
  }

  return (
    <>
      <div>
        <h1>Education</h1>
      </div>
      <div>
        <label htmlFor="college">College</label>
        <input
          onChange={(event) => handleEduUpdate(event)}
          value={eduData.college}
          name="college"
          type="text"
          placeholder="Enter where you study"
        />
        <label htmlFor="location">Location</label>
        <input
          onChange={(event) => handleEduUpdate(event)}
          value={eduData.location}
          name="location"
          type="text"
          placeholder="ENter the location of the college"
        />
        <label htmlFor="degree">Degree</label>
        <input
          onChange={(event) => handleEduUpdate(event)}
          value={eduData.degree}
          name="degree"
          type="text"
          placeholder="Enter your degree name"
        />
        <label htmlFor="course">Course</label>
        <input
          onChange={(event) => handleEduUpdate(event)}
          value={eduData.course}
          name="course"
          type="text"
          placeholder="ENter our course name"
        />
        <label htmlFor="sDate">Start Date</label>
        <input
          onChange={(event) => handleEduUpdate(event)}
          value={eduData.sDate}
          name="sDate"
          type="date"
        />
        <label htmlFor="eDate">Expected/End date</label>
        <input
          onChange={(event) => handleEduUpdate(event)}
          value={eduData.eDate}
          name="eDate"
          type="date"
        />
      </div>
      <button onClick={handleLclSubmit}>Submit</button>
    </>
  );
}

export default Edu;
