import { useContext } from 'react';
import ClickContext from './ClickContext';

function Roller(props) {
    const { clickCount, setClickCount } = useContext(ClickContext);

    function handleBuy() {
        if (clickCount >= props.cost) {
            setClickCount(clickCount - props.cost);
            setInterval(function () {
                setClickCount(function (prevCount) {
                    return prevCount + props.increment;
                });
            }, props.interval);
        }
    }

    return (
        <div className="roller">
            <h2>{props.name}</h2>
            <p>Cost: {props.cost} clicks</p>
            <p>Increments: {props.increment} click(s) every {props.interval / 1000} seconds</p>
            <button onClick={handleBuy} disabled={clickCount < props.cost}>Buy</button>
        </div>
    );
}

export default Roller;
