import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/rollers">Rollers</Link></li>
            <li><Link to="/decor">Decor</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rollers" component={Rollers} />
          <Route path="/decor" component={Decor} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}