import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Monitor from "./components/monitor/Monitor";

import "./App.css";

class App extends Component {

    constructor() {
        super();
        this.window = {
            VALID_NUMS: [0, 1, 2, 3, 4],
            MONITOR: 0,

            VIEW_NODE: 1,
            INSERT_NODE: 2,

            VIEW_TYPE: 3,
            INSERT_TYPE: 4
        };
        this.state = {
            currentWindow: this.window.MONITOR
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

    renderWindow = () => {  
        switch (this.state.currentWindow) {
            case this.window.INSERT_NODE:
                return <div className="ml-2 mr-2">INSERT_NODE</div>;
            case this.window.INSERT_TYPE:
                return <div className="ml-2 mr-2">INSERT_TYPE</div>;
            case this.window.VIEW_NODE:
                return <div className="ml-2 mr-2">VIEW_NODE</div>;
            case this.window.VIEW_TYPE:
                return <div className="ml-2 mr-2">VIEW_TYPE</div>;
            case this.window.MONITOR:
                return <Monitor/> ;
            default:
                return <div className="ml-2 mr-2">Incorrect Window Value</div>;
        }
    };

    render() {
        return (
            <div className="App">
                <NavBar 
                    currentWindow={this.state.currentWindow} 
                    window={this.window} 
                    handleWindowChange={this.handleWindowChange} />
 
                <div className="AppBody">
                    {this.renderWindow()} 
                </div>
            </div>
        );
    }
}

export default App;
