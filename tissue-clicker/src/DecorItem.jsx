import { useContext } from 'react';
import ClickContext from './ClickContext';

function DecorItem(props) {
    const { clickCount, setClickCount } = useContext(ClickContext);

    function handleUnlock() {
        if (clickCount >= props.cost) {
            setClickCount(clickCount - props.cost);
            props.onUnlock(props.color);
        }
    }

    return (
        <div className="decor-item">
            <h2>{props.name}</h2>
            <p>Cost: {props.cost} clicks</p>
            <button onClick={handleUnlock} disabled={clickCount < props.cost || props.unlocked}>Unlock</button>
        </div>
    );
}

export default DecorItem;