import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Info.css"; // Importing CSS

function Info() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    address: "",
    phonenumber: "",
    email: "",
  });

  const handleFormData = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleForward = () => {
    localStorage.setItem("info",JSON.stringify(formData));
    navigate("/skill");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Personal Information</h1>

      <input
        type="text"
        value={formData.fullname}
        onChange={handleFormData}
        name="fullname"
        placeholder="Enter your full name"
        className="input-field"
      />
      <input
        type="text"
        value={formData.address}
        onChange={handleFormData}
        name="address"
        placeholder="Enter your address"
        className="input-field"
      />
      <input
        type="text"
        value={formData.phonenumber}
        onChange={handleFormData}
        name="phonenumber"
        placeholder="Enter your phone number"
        className="input-field"
      />
      <input
        type="email"
        value={formData.email}
        onChange={handleFormData}
        name="email"
        placeholder="Enter your email"
        className="input-field"
      />

      <button onClick={handleForward} className="next-button">
        Next
      </button>
    </div>
  );
}

export default Info;
