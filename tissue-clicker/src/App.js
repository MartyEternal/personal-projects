import { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Rollers from './Rollers';
import Decor from './Decor';
import About from './About';
import Settings from './Settings';
import { ClickProvider } from './ClickContext';

function App() {
  const [activeMenu, setActiveMenu] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [tissueGetBigger, setTissueGetBigger] = useState(true);
  const [showTitle, setShowTitle] = useState(true);

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

  function handleToggleSettings() {
    toggleMenu('settings');
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleTissueGetBigger() {
    setTissueGetBigger(!tissueGetBigger);
  }

  function toggleShowTitle() {
    setShowTitle(!showTitle);
  }

  return (
    <ClickProvider>
      <Router>
        <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
          <nav>
            <ul>
              {/* <li><Link to="/">Home</Link></li> */}
              <li><Link to="#" onClick={handleToggleRollers}>Rollers</Link></li>
              <li><Link to="#" onClick={handleToggleDecor}>Decor</Link></li>
              <li><Link to="#" onClick={handleToggleAbout}>About</Link></li>
              <li><Link to="#" onClick={handleToggleSettings}>Settings</Link></li>
            </ul>
          </nav>
          <div className="content">
            <Home />
            {activeMenu === 'rollers' && <Rollers />}
            {activeMenu === 'decor' && <Decor />}
            {activeMenu === 'about' && <About />}
            {activeMenu === 'settings' && (
              <Settings
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                tissueGetBigger={tissueGetBigger}
                toggleTissueGetBigger={toggleTissueGetBigger}
                showTitle={showTitle}
                toggleShowTitle={toggleShowTitle}
              />
            )}
          </div>
        </div>
      </Router>
    </ClickProvider>
  );
}

export default App;
