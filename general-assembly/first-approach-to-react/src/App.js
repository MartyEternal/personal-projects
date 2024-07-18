import { useState } from 'react';
import './App.css';
<<<<<<< HEAD
import NewSkillForm from './NewSkillForm'
import SkillList from './SkillList'
import "./SkillListItem.css";
import "./NewSkillForm.css";
=======
import ToDoList from './ToDoList';
import SkillList from './skilllist';
import NewSkillForm from './newskillform';
import "./ToDoListItem.css";

const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN Stack'
];
<<<<<<< HEAD
>>>>>>> 73ff451 (just tidying up)
=======
>>>>>>> ad3f73a8d6e78ced7fe859bd54211e9b11ed591a

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
<<<<<<< HEAD
      <h1 className="teal-text">React Dev Skills</h1>
      <span><SkillList skills={skills} /></span>
      <span><NewSkillForm onSubmit={addSkill} /></span>
    </div>
=======
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>React Dev Skills</h1>
        <SkillList />
        <NewSkillForm /> */}

        <h1>React To-Do</h1>
        <ToDoList todos={todos} />

      </header>
    </div >
<<<<<<< HEAD
>>>>>>> 73ff451 (just tidying up)
=======
>>>>>>> ad3f73a8d6e78ced7fe859bd54211e9b11ed591a
  );
}

export default App;
