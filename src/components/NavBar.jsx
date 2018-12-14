import React, { Component } from "react";
import Settings from './Settings'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from "reactstrap";

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    renderSelectedWindow = () => {
        const {window, appStates} = this.props;
        const {currentWindow} = appStates;

        let content = "Window Undefined";

        switch (currentWindow) { 
            case window.MONITOR:
                content = "Monitor Interface";
                break;
            case window.SETTINGS:
                content = "Settings";
                break;
            default:
                break;
        }

        return <div className="ml-2 mr-5 NavBarText">{content}</div>;
    };

    renderWindowButton = (newWindowValue, displayText) => {
        const {currentWindow } = this.props.appStates;
        const {handleWindowChange} = this.props.appFunctions;

        const isDisabled = newWindowValue === currentWindow ? "disabled" : "";
        return <Button onClick={() => handleWindowChange(newWindowValue)} className={"m-2 " + isDisabled} > {displayText}</Button>
    };

    renderOptions = () => {
        const { window, appStates, appFunctions } = this.props;
        return (
            <Nav navbar>
                <NavItem>
                    {this.renderWindowButton(window.MONITOR, "Monitor Interface")}
                </NavItem>
                <NavItem>
                    <Settings appStates={appStates} appFunctions={appFunctions}/>
                </NavItem>
                <NavItem>
                    <NavLink href="https://github.com/lnls-sirius/bbb-daemon">
                        GitHub
                    </NavLink>
                </NavItem>
            </Nav>
        );
    };

    render() {
        const {baseUrl} = this.props.appStates;
        return (
            <div>
                <Navbar className="navbar navbar-dark bg-dark">
                    <NavbarBrand href="/" className="mr-auto">
                        BeagleBone Daemon
                    </NavbarBrand>
                    <span className='ml-2 mr-2' style={{fontSize:18, color:'white'}}>
                        {baseUrl}
                    </span>
                    {this.renderSelectedWindow()}
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar >
                        {this.renderOptions()}
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default NavBar;
