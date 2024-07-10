import Roller from "./Roller";
import './App.css';

function Rollers() {
    const rollerData = [
        { name: 'Basic Roller', cost: 100, increment: 1, interval: 2000 },

    ];

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
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Rollers;