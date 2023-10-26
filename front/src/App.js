import React from "react";
import HomeIndicator from "./component/home-indicator";
import StatusBar from "./component/status-bar";
import Welcome from "./component/welcome";

import "./app.css";

function App() {
    return (
        <div className="app">
            <StatusBar></StatusBar>

            <Welcome></Welcome>

            <HomeIndicator></HomeIndicator>
        </div>
    );
}

export default App;
