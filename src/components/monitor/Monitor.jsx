import React, { Component } from 'react';
import Chart from './Chart';
import { Table, Button } from 'reactstrap';

class Monitor extends Component {
    constructor(props) {
        super(props);
    }

    renderTableRows = () => {

    };

    renderTable = (tableName, tableHeaderClass) => {
        return (<div>
            {tableName}
            <Table hover responsive>
                <thead>
                    <tr className={tableHeaderClass}>
                        <th>Name</th>
                        <th>IP Address</th>
                        <th>Details</th>
                        <th>Device</th>
                        <th>Config Time</th>
                        <th>Type Name</th>
                        <th>Type Repo URL</th>
                        <th>rc.local Path</th>
                        <th>Sector</th>
                        <th>PV Prefix</th>
                        <th>State</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>
            </Table>
        </div>
        );
    };

    renderConfiguredTable = () => {
        let tableName = "Configured Nodes";
        let tableHeaderClass = "bg-primary text-white";
        return (this.renderTable(tableName, tableHeaderClass));
    };

    renderMisconfiguredTable = () => {
        let tableName = "Misconfigured Nodes";
        let tableHeaderClass = "bg-warning text-dark";
        return (this.renderTable(tableName, tableHeaderClass));
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6">
                        <Chart />
                    </div>
                    <div className="col-6">
                        <Chart />
                    </div>
                </div>
                <hr />
                <div className="m-2">
                    {this.renderConfiguredTable()}
                    <hr />
                    {this.renderMisconfiguredTable()}
                </div>
            </div>
        );
    };
}
export default Monitor;

/**
 * 
                <div className="row m-2">
                    <div className="col-2 bg-dark text-white m-2">
                        <div> <Button className="mt-1 mb-1">Reboot BeagleBone</Button> </div> 
                        <div> <Button className="mt-1 mb-1">Switch BeagleBone</Button> </div> 
                        <div> <Button className="mt-1 mb-1"> Change Hostname </Button> </div> 
                    </div>
                    <div className="col">
                        {this.renderConfiguredTable()}
                        <hr/>
                        {this.renderMisconfiguredTable()}
                    </div>  
                </div>
 */