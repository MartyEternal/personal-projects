import './App.css';

function Settings(props) {
    return (
        <div className="settings">
            <h1>Settings</h1>
            <div className="setting-item">
                <label>
                    <input
                        type="checkbox"
                        checked="{props.darkMode}"
                        onChange="{props.toggleDarkMode}"
                    />
                    Dark Mode
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input
                        type="checkbox"
                        checked="{props.tissueGetBigger}"
                        onChange="{props.toggleTissueGetBigger}"
                    />
                    Tissue Gets Bigger
                </label>
            </div>
            <div className="setting-item">
                <label>
                    <input
                        type="checkbox"
                        checked="{props.showTitle}"
                        onChange="{props.toggleShowTitle}"
                    />
                    Hide Game Title
                </label>
            </div>
        </div>
    )
}

export default Settings;