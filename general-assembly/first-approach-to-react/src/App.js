import logo from './logo.svg';
import './App.css';
import ToDoList from './ToDoList';
import SkillList from './skilllist';
import NewSkillForm from './newskillform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>React Dev Skills</h1>
        <SkillList />
        <NewSkillForm />
      </header>
    </div>
  );
}

export default App;
