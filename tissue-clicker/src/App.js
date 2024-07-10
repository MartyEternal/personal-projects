import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Rollers from './Rollers';
import Decor from './Decor';
import About from './About';
import { ClickProvider } from './ClickContext';

function App() {
  const [activeMenu, setActiveMenu] = useState('');

  function toggleMenu(menu) {
    setActiveMenu(activeMenu === menu ? '' : menu);
  }

  function handleToggleRollers() {
    toggleMenu('rollers');
  }

  function handleToggleDecor() {
    toggleMenu('decor');
  }

  function handleToggleAbout() {
    toggleMenu('about');
  }

  return (
    <ClickProvider>
      <Router>
        <div className="App">
          <nav>
            <ul>
              {/* <li><Link to="/">Home</Link></li> */}
              <li><Link to="#" onClick={handleToggleRollers}>Rollers</Link></li>
              <li><Link to="#" onClick={handleToggleDecor}>Decor</Link></li>
              <li><Link to="#" onClick={handleToggleAbout}>About</Link></li>
            </ul>
          </nav>
          <div className="content">
            <Home />
            {activeMenu === 'rollers' && <Rollers />}
            {activeMenu === 'decor' && <Decor />}
            {activeMenu === 'about' && <About />}
          </div>
        </div>
      </Router>
    </ClickProvider>
  );
}

export default App;
