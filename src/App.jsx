import React, { Component } from "react";
import NavBar from "./components/NavBar";

import Monitor from "./components/Monitor";

import { getNodes, rebootNode } from './api.js';

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
            baseUrl: 'https://10.0.38.34/bbb-daemon/api',
            refreshInterval: 1000,
            showSettings: false,
            nodes: [],
            online: false
        };
    }

    componentDidMount() {
        const { refreshInterval } = this.state;
        this.loadData(this);
        this.intervalId = setInterval(this.loadData, refreshInterval, this);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    loadData = async (app) => {
        // Make a request
        getNodes(app.state.baseUrl,
            (response) =>
                app.setState({
                    nodes: response.data,
                    online: true
                })
            , (response) => app.setState({ online: false }));
    }

    handleWindowChange = (newWindow) => {
        if (this.window.VALID_NUMS.includes(newWindow)
            && this.currentWindow !== newWindow) {
            this.setState({ currentWindow: newWindow })
        }
    };

    handleUpdateUrl = (newBaseUrl) => {
        this.setState({
            baseUrl: newBaseUrl
        });
    }

    handleDisplaySettings = () => {
        this.setState((prevState, props) => {
            return { showSettings: !(prevState.showSettings === true) };
        });
    }
    
    renderWindow = (currentWindow) => {
        switch (currentWindow) {
            case this.window.MONITOR:
                return <Monitor
                    appStates={this.state}
                    appProps={this.props}
                    appFunctions={{
                        handleUpdateUrl: this.handleUpdateUrl,
                        handleDisplaySettings: this.handleDisplaySettings,
                        handleWindowChange: this.handleWindowChange,
                    }} />;
            default:
                return <div className="m2">Incorrect Window Value</div>;
        }
    };

    render() {
        const { currentWindow } = this.state;
        return (
            <div>
                <div className="App">
                    <NavBar
                        appStates={this.state}
                        appProps={this.props}
                        appFunctions={{
                            handleUpdateUrl: this.handleUpdateUrl,
                            handleDisplaySettings: this.handleDisplaySettings,
                            handleWindowChange: this.handleWindowChange
                        }}
                        window={this.window} />
                    <div className="AppBody">
                        {this.renderWindow(currentWindow)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
