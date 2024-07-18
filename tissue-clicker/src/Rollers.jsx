import { useState, useContext } from 'react';
import Roller from "./Roller";
import ClickContext from './ClickContext';
import './App.css';

function Rollers() {
    const initialRollerData = [
        { name: 'Basic Roller', cost: 100, increment: 1, interval: 2000, level: 0 },
        { name: 'Wood Roller', cost: 500, increment: 2, interval: 2000, level: 0 },
        { name: 'Rock Roller', cost: 2500, increment: 4, interval: 2000, level: 0 },
        { name: 'Iron Roller', cost: 12500, increment: 8, interval: 2000, level: 0 },
        { name: 'Bronze Roller', cost: 62500, increment: 16, interval: 2000, level: 0 },
        { name: 'Steel Roller', cost: 312500, increment: 32, interval: 2000, level: 0 },
        { name: 'Silver Roller', cost: 1562500, increment: 64, interval: 2000, level: 0 },
        { name: 'Gold Roller', cost: 7812500, increment: 128, interval: 2000, level: 0 },
        { name: 'Platinum Roller', cost: 39062500, increment: 256, interval: 2000, level: 0 },
        { name: 'Diamond Roller', cost: 195312500, increment: 512, interval: 2000, level: 0 },
        { name: 'Emerald Roller', cost: 976562500, increment: 1024, interval: 2000, level: 0 },
        { name: 'Ruby Roller', cost: 4882812500, increment: 2048, interval: 2000, level: 0 },
        { name: 'Sapphire Roller', cost: 24414062500, increment: 4096, interval: 2000, level: 0 },
        { name: 'Amethyst Roller', cost: 122070312500, increment: 8192, interval: 2000, level: 0 },
        { name: 'Obsidian Roller', cost: 610351562500, increment: 16384, interval: 2000, level: 0 },
        { name: 'Mythril Roller', cost: 3051757812500, increment: 32768, interval: 2000, level: 0 },
        { name: 'Titanium Roller', cost: 15258789062500, increment: 65536, interval: 2000, level: 0 },
        { name: 'Adamantite Roller', cost: 76293945312500, increment: 131072, interval: 2000, level: 0 },
        { name: 'Uranium Roller', cost: 381469726562500, increment: 262144, interval: 2000, level: 0 },
        { name: 'Quantum Roller', cost: 1907348632812500, increment: 524288, interval: 2000, level: 0 },
        { name: 'Neutronium Roller', cost: 9536743164062500, increment: 1048576, interval: 2000, level: 0 },
        { name: 'Celestial Roller', cost: 47683715820312500, increment: 2097152, interval: 2000, level: 0 },
        { name: 'Cosmic Roller', cost: 238418579101562500, increment: 4194304, interval: 2000, level: 0 },
        { name: 'Galactic Roller', cost: 1192092895507812500, increment: 8388608, interval: 2000, level: 0 },
        { name: 'Interstellar Roller', cost: 5960464477539062500, increment: 16777216, interval: 2000, level: 0 },
        { name: 'Nebula Roller', cost: 29802322387695312500, increment: 33554432, interval: 2000, level: 0 },
        { name: 'Singularity Roller', cost: 149011611938476562500, increment: 67108864, interval: 2000, level: 0 },
    ];

    const { clickCount, setClickCount } = useContext(ClickContext);
    const [rollerData, setRollerData] = useState(initialRollerData);

    function handleBuy(index) {
        const roller = rollerData[index];
        if (clickCount >= roller.cost) {
            setClickCount(clickCount - roller.cost);

            const newRollerData = rollerData.map(function (item, i) {
                if (i === index) {
                    return {
                        ...item,
                        cost: Math.floor(item.cost * 1.10),
                        interval: Math.max(item.interval - 50, 100),
                        level: item.level + 1,
                    };
                }
                return item;
            });

            setRollerData(newRollerData);

            setInterval(function () {
                setClickCount(function (prevCount) {
                    return prevCount + roller.increment;
                });
            }, roller.interval);
        }
    }

    return (
        <div className="rollers">
            <h1>Rollers</h1>
            <p>Unlockable components to assist in click count.</p>
            <div className="roller-list">
                {rollerData.map(function (roller, index) {
                    return (
                        <Roller
                            key={index}
                            name={roller.name}
                            cost={roller.cost}
                            increment={roller.increment}
                            interval={roller.interval}
                            level={roller.level}
                            onBuy={function () { handleBuy(index); }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Rollers;