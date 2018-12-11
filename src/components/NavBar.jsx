import React, { Component } from "react";

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
        const window = this.props.window;
        const currentWindow = this.props.currentWindow;

        let content = "Window Undefined";

        switch (currentWindow) {
            // case  window.INSERT_TYPE:
            //     content = "Insert Type";
            //     break;
            // case  window.VIEW_NODE:
            //     content = "View Node";
            //     break
            // case  window.VIEW_TYPE:
            //     content = "View Type";
            //     break;
            case window.MONITOR:
                content = "Monitor Interface";
                break;
            case window.SETTINGS:
                content = "Settings";
                break;
        }

        return <div className="ml-2 mr-5 NavBarText">{content}</div>;
    };

    renderWindowButton = (newWindowValue, displayText) => {
        const currentWindow = this.props.currentWindow;
        const handleWindowChange = this.props.handleWindowChange;

        const isDisabled = newWindowValue === currentWindow ? "disabled" : "";
        return <Button onClick={() => handleWindowChange(newWindowValue)} className={"m-2 " + isDisabled} > {displayText}</Button>
    };

    renderOptions = () => {
        const { window, handleDisplaySettings } = this.props;
        return (
            <Nav navbar>
                <NavItem>
                    {this.renderWindowButton(window.MONITOR, "Monitor Interface")}
                </NavItem>
                <NavItem>
                    {this.renderWindowButton(window.SETTINGS, "Settings")}
                    {/* {this.renderWindowButton(window.INSERT_NODE, "Insert Node")}
                    {this.renderWindowButton(window.VIEW_TYPE, "View Types")}
                    {this.renderWindowButton(window.INSERT_TYPE, "Insert Type")} } */}
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
        return (
            <div>
                <Navbar className="navbar navbar-dark bg-dark ">
                    <NavbarBrand href="/" className="mr-auto">
                        BeagleBone Daemon
                    </NavbarBrand>
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
