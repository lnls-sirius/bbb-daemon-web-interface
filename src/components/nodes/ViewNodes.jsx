import React, { Component } from "react";
import { Table, Button } from 'reactstrap';

class ViewNodes extends Component {
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
    render() {
        return (
            <div>
                <div>View Nodes</div>
                {this.renderTable()}
            </div>
        );
    };
}

export default ViewNodes;