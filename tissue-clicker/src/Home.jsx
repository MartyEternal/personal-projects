import { useState } from 'react';
import './App.css';

function Home() {
    const [clickCount, setClickCount] = useState(0);

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