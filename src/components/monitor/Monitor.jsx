import React, { Component } from 'react';
import Chart from './Chart';
import { Table } from 'reactstrap';

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
                <div className="m-2">
                    <div style={{ width: '50%', float: 'left' }}>
                        <Chart />
                    </div>
                    <div style={{ width: '50%', float: 'left' }}>
                        <Chart />
                    </div>
                </div> 
                {this.renderConfiguredTable()}
                <hr/>
                {this.renderMisconfiguredTable()}
            </div>
        );
    };
}
export default Monitor;