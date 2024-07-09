import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount(clickCount + 1);
  }

  // function handleKeyPress() {
  //   if (event.key === ' ') {
  //     setClickCount(clickCount + 1);
  //   }
  // }

  // useEffect(function() {
  //   window.addEventListener('keydown', handleKeyPress);

  //   return function() {
  //     window.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, [clickCount]);

  return (
    <div className="App" onClick={handleClick}>
      <h1>Tissue Clicker Game</h1>
      <p>Click Count: {clickCount}</p>
      <div className="tissue-roll">
        <p>🧻</p>
      </div>
    </div>
  );
}

export default App;
