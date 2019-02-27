import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Monitor from "./components/Monitor";

import { reIpNetworkIp, reHostname } from './regex';
import { getNodesAll, postNodeReboot, postNodeIpNetworkGateway, postNodeHostname } from './api/node';

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
            refreshInterval: 2000,
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
        getNodesAll(app.state.baseUrl,
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

    /** Handle calls to configure a node's hostname. */
    handleNewHostname = (ip, hostname) =>{
        hostname = hostname.trim();
        if(reHostname.test(hostname)){
            console.log('New hostname', hostname);
            postNodeHostname(this.props.baseUrl, ip, hostname);
            return true;
        }else{
            console.log('Does not match the pattern.');
            return false;
        }
    }

    /** Handle calls to configure a node's network. */
    handleNewIp = (ip, new_ip_string, fThen, fCatch) =>{
        // Tries to match the ip net_ip/mask ip pattern
        if(reIpNetworkIp.test(new_ip_string)){
            // ip_new, ip_network, ip_gateway
            let aux = new_ip_string.split(" ");
            console.log('New network config', aux);
            postNodeIpNetworkGateway(this.props.baseUrl, ip, aux[0].trim(), aux[1].trim(), aux[2].trim())
            return true;
        }else{
            console.log('Does not match the pattern.');
            return false;
        }
    };

    handleReboot = (ip) => {
        postNodeReboot(this.props.baseUrl, ip);
    }

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
                        handleNewHostname: this.handleNewHostname,
                        handleNewIp: this.handleNewIp,
                        handleUpdateUrl: this.handleUpdateUrl,
                        handleDisplaySettings: this.handleDisplaySettings,
                        handleWindowChange: this.handleWindowChange,
                        handleReboot: this.handleReboot
                    }} />;
            default:
                return <div className="m2">Incorrect Window Value</div>;
        }
    };

    handleReboot = (ip) => {
        postNodeReboot(this.state.baseUrl, ip);
    }

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
