import logo from './logo.svg';
import './App.css';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen';
import Bath from './Bath';
import LivingRoom from './LivingRoom';

function App() {
  return (
    <div className="App">
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size="Full" /> {/* full */}
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size="Half"/> {/* half */}
      <Bedroom bedNum={3} />
    </div>
  );
}

export default App;
