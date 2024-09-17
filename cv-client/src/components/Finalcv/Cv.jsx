import React, { useState, useEffect } from "react";
import "./Cv.css";

function Cv() {

  const [aiGeneratedText,setAiGeneratedText] = useState("");

  const [personalInfo, setPersonalInfo] = useState(
    "" || JSON.parse(localStorage.getItem("info"))
  );

  const [skills, setSkills] = useState(
    "" || JSON.parse(localStorage.getItem("skills"))
  );

  const [work, setWork] = useState(
    "" || JSON.parse(localStorage.getItem("work"))
  );
  const [education, setEducation] = useState(
    "" || JSON.parse(localStorage.getItem("education"))
  );
  const [acc, setAcc] = useState("" || JSON.parse(localStorage.getItem("acc")));

  const [exp, setExp] = useState("" || JSON.parse(localStorage.getItem("exp")));




  useEffect(() => {
    const askGemini = async () => {
      try {
        const company = work?.company || "Unknown company";
        const role = work?.role || "Unknown role";
        
        const experience = exp?.map(item => item.value).join(", ") || "No experience";
        const accomplishment = acc?.map(item => item.value).join(", ") || "No accomplishments";
  
        const aiDataString = `Company: ${company}, Role: ${role}, Experience: ${experience}, Accomplishments: ${accomplishment}`;
  
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB6CXADyXzHEVxhK_auxzxlyIU4lzw5p6o`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `${aiDataString}. Generate a short intro based on this data.`,
                    },
                  ],
                },
              ],
            }),
          }
        );
  
        const data = await response.json();
  
        if (response.ok) {
          console.log(data);
          const generatedText = data.candidates[0].content.parts[0].text;
          setAiGeneratedText(generatedText);
        } else {
          console.error("Error:", data.error || "An error occurred");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
  
    if (work && exp && acc) {
      askGemini();
    }
  }, []);
  
  

  return (
    <div className="cv-container">
      <div className="cv-title">
        <h1>Sulav Gautam</h1>
        <h3>Student</h3>
      </div>
      <article className="cv-article">
        {aiGeneratedText}
      </article>
      <div className="cv-sides">
        <div className="cv-left-side">
          <div className="section">
            <div className="head">
              <i className="fa-solid fa-user"></i>
              <span>Contact</span>
            </div>
            <div className="line"></div>
            <div className="data">
              {Object.entries(personalInfo).map(([key, value], index) => (
                <div key={index}>
                  <h3>{key}</h3>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="section">
            <div className="head">
              <i className="fa-solid fa-user"></i>
              <span>Skills</span>
            </div>
            <div className="line"></div>
            <div className="data">
              {skills?.map((item, index) => (
                <div key={index} className="skill-list">
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="cv-right-side">
          <div className="section cv-work-history">
            <h3>Work History</h3>
            <div className="subsection">
              <span>{work.startDate}</span>
              <span>{work.endDate}</span>
            </div>

            <div className="subsection">
              <span>
                {work.company},{work.cLocation}
              </span>
              <div className="list">
                <ul>
                  {exp.map((item) => (
                    <li key={item.id}>{item.value}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="section cv-education">
            <h3>Education</h3>
            <div className="subsection">
              <span>{education.sDate}</span>
              <span>{education.eDate}</span>
            </div>
            <div className="subsection">
              <h3>
                {education.degree}:{education.course}
              </h3>
              <span>
                {education.college}-{education.location}
              </span>
            </div>
          </div>
          <div className="section cv-accomplishments">
            <h3>Accomplishments</h3>
            <ul>
              {acc.map((item) => (
                <li key={item.id}>{item.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
