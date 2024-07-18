import { useContext } from 'react';
import ClickContext from './ClickContext';
import './App.css';

function Roller(props) {
    const { clickCount } = useContext(ClickContext);

    return (
        <div className="roller">
            <h2>{props.name}</h2>
            <p>Cost: {props.cost} clicks</p>
            <p>Increments: {props.increment} click(s) every {props.interval / 1000} seconds</p>
            <p>Level: {props.level}</p>
            <button onClick={props.onBuy} disabled={clickCount < props.cost}>Buy</button>
        </div>
    );
}

export default Roller;
