import { useContext, useState } from 'react';
import ClickContext from './ClickContext';
import DecorItem from './DecorItem';
import './App.css';

function Decor() {
    const { clickCount } = useContext(ClickContext);
    const [unlockedColors, setUnlockedColors] = useState([]);

    const decorData = [
        { name: "Pastel Pink", cost: 10, color: "#ffd1dc" },
        { name: "Pastel Blue", cost: 1000000, color: "#aec6cf" },
        { name: "Pastel Green", cost: 10000000, color: "#77dd77" },
    ];

    function handleUnlock(color) {
        setUnlockedColors([...unlockedColors, color]);
    }

    return (
        <div className="decor" style={{ backgroundColor: unlockedColors[unlockedColors.length - 1] || "#f0f0f0" }}>
            <h1>Decor</h1>
            <p>Customize your background with images unlocked with tradeable items.</p>
            <div className="decor-list">
                {decorData.map(function (decor, index) {
                    return (
                        <DecorItem
                            key={index}
                            name={decor.name}
                            cost={decor.cost}
                            color={decor.color}
                            unlocked={unlockedColors.includes(decor.color)}
                            onUnlock={handleUnlock}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Decor;