import { useState } from 'react';
import './App.css';
import NewSkillForm from './NewSkillForm'
import SkillList from './SkillList'
import "./SkillListItem.css";
import "./NewSkillForm.css";

function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])

  function addSkill(skill) {
    setSkills([...skills, skill]);
  }

  return (
    <div className="App">
      <h1 className="teal-text">React Dev Skills</h1>
      <span><SkillList skills={skills} /></span>
      <span><NewSkillForm onSubmit={addSkill} /></span>
    </div>
  );
}

export default App;
