import React, { Component } from "react";
import NavBar from "./components/NavBar";

import Monitor from "./components/monitor/Monitor";
import Settings from "./components/Settings";

import "./App.css";

class App extends Component {

    constructor() {
        super();
        this.window = {
            VALID_NUMS: [0, 1],
            MONITOR: 0,
            SETTINGS: 1
        };
        this.state = {
            currentWindow: this.window.MONITOR,
            baseUrl: 'http://0.0.0.0:4850',
            refreshInterval: 1000,
            showSettings: false
        };
    }

    handleWindowChange = (newWindow) => {
        if (this.isNewWindowValid(newWindow) && this.currentWindow !== newWindow) {
            this.setState({ currentWindow: newWindow })
        }
    };

    isNewWindowValid = (newWindow) => {
        return this.window.VALID_NUMS.includes(newWindow);
    };

    renderWindow = (currentWindow) => {
        const { baseUrl, showSettings, refreshInterval } = this.state;

        switch (currentWindow) {
            case this.window.SETTINGS:
                return <Settings
                    show={showSettings}
                    url={baseUrl}
                    handleUpdateUrl={this.handleUpdateUrl}
                />;
            case this.window.MONITOR:
                return <Monitor
                    baseUrl={baseUrl}
                    refreshInterval={refreshInterval} />;
            default:
                return <div className="ml-2 mr-2">Incorrect Window Value</div>;
        }
    };

    handleUpdateUrl = (baseUrl) => {
        this.setState({
            baseUrl: baseUrl
        });
    }
    handleDisplaySettings = () => {
        this.setState((prevState, props) => {
            return { showSettings: !(prevState.showSettings === true) };
        });
    }

    render() {
        const { currentWindow, showSettings } = this.state;
        return (
            <div>
                <div className="App">
                    <NavBar
                        currentWindow={currentWindow}
                        window={this.window}
                        handleWindowChange={this.handleWindowChange}
                        handleDisplaySettings={this.handleDisplaySettings} />
                    <div className="AppBody">
                        {this.renderWindow(currentWindow)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
