import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import SkillList from './skilllist';
import NewSkillForm from './newskillform';
import "./ToDoListItem.css";

const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN Stack'
];

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
