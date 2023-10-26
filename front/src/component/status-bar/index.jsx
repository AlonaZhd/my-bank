import cellular from './cellular.svg'
import wifi from './wifi.svg'
import battery from './battery.svg'
import "./index.css";

function StatusBar() {
    return (
        <div className="status-bar d-flex justify-content-between align-items-center">
            <span className="status-bar--text">9:45</span>
            <div className="status-bar--icons">
                <img src={cellular}/>
                <img src={wifi}/>
                <img src={battery}/>
            </div>
        </div>
    );
}

export default StatusBar;