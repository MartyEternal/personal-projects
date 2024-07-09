import { useContext } from 'react';
import ClickContext from './ClickContext';
import './App.css';

function Home() {
    const { clickCount, setClickCount } = useContext(ClickContext);

    function handleClick() {
        setClickCount(clickCount + 1);
    }

    return (
        <div className="home" onClick={handleClick}>
            <h1>Tissue Clicker Game</h1>
            <p>Click Count: {clickCount}</p>
            <div className="tissue-roll">
                <p>🧻</p>
            </div>
        </div>
    );
}

export default Home;
