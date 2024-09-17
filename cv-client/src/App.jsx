import React from "react";
import { Route, Routes } from "react-router-dom";
import Info from "./components/Info/Info";
import Skill from "./components/Skill/Skill";
import Education from "./components/Education/Education";
import Edu from "./components/Edu/Edu";
import Accomplish from "./components/Accomplishment/Accomplish";
import Cv from "./components/Finalcv/Cv";

function App() {
  return (
    <>
      <Routes>
        {/* path should be used in route and to in link */}
        <Route path="/" element={<Info />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/education" element={<Education />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/acc" element={<Accomplish />} />
        <Route path='/cv' element={<Cv/>}/>
      </Routes>
    </>
  );
}

export default App;
