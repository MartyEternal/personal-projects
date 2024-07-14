import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList'
import NewSkillForm from './NewSkillForm'
import SkillList from './SkillList'
import "./ToDoListItem.css";
import "./SkillListItem.css";
import "./NewSkillForm.css";

// const todos = [
//   'Have Fun',
//   'Learn React',
//   'Learn the MERN Stack'
// ];

// const skills = [
//   { name: "HTML", level: 5 },
//   { name: "CSS", level: 3 },
//   { name: "JavaScript", level: 4 },
//   { name: "Python", level: 2 },
// ];

function App() {
  // const [showTodos, setShowTodos] = useState(true)

  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])

  return (
    <div className="App">
      {/* <h1>React To-Do</h1>
      {showTodos && <ToDoList todos={todos} />} */}


      <h1 className="teal-text">React Dev Skills</h1>
      <span><SkillList skills={skills} /></span>
      <span><NewSkillForm /></span>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header> */}
    </div>
  );
}

export default App;
