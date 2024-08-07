import { useContext, useState, useEffect } from 'react';
import ClickContext from './ClickContext';
import './App.css';

function Home(props) {
    const { clickCount, setClickCount } = useContext(ClickContext);
    const [size, setSize] = useState(5); // Base size in rem
    const [isPopped, setIsPopped] = useState(false);
    const [lastClickTime, setLastClickTime] = useState(Date.now());

    useEffect(function () {
        if (isPopped) {
            var timer = setTimeout(function () {
                setIsPopped(false);
            }, 200);
            return function () {
                clearTimeout(timer);
            };
        }
    }, [isPopped]);

    useEffect(function () {
        var resetTimer = setTimeout(function () {
            if (Date.now() - lastClickTime >= 5000) {
                setSize(5); // Reset size to original after 5 seconds of inactivity
            }
        }, 5000);

        return function () {
            clearTimeout(resetTimer);
        };
    }, [lastClickTime]);

    function handleClick() {
        setClickCount(clickCount + 1);
        if (props.tissueGetBigger) {
            setIsPopped(true);
            setSize(function (prevSize) {
                return Math.min(prevSize + 0.5, 50); // Increment size, max 50rem (500px)
            });
        }
        setLastClickTime(Date.now());
    }

    return (
        <div className="home" onClick={handleClick}>
            {props.showTitle && <h1 className="game-title">Tissue Clicker Game</h1>}
            <p>Click Count: {clickCount}</p>
            <div
                className={`tissue-roll ${isPopped ? 'popped' : ''}`}
                style={{ fontSize: size + 'rem' }}
            >
                🧻
            </div>
        </div>
    );
}

export default Home;
