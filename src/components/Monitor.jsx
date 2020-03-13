import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: ''
        }
    }


    handleFiltering = (node) => {
        const filter = this.state.filter;

        return (
            filter === null ||
            filter === '' ||
            node.ip_address.includes(filter) ||
            node.name.includes(filter) ||
            node.details.includes(filter) ||
            node.state_string.includes(filter) ||
            node.config_time.includes(filter)
        )
    }

    renderTableRows = (nodes) => {
        let rows = nodes
            .map(function (node, i) {
                return (
                    <tr key={i}>
                        <td>{node['ip_address']}</td>
                        <td>{node['name']}</td>
                        <td>{node['details']}</td>
                        <td>{node['state_string']}</td>
                        <td>{node['config_time']}</td>
                        <td>
                        </td>
                        <td>
                        </td>
                    </tr>
                )
            }, this);
        return rows;
    };

    renderTable = (tableHeaderClass, nodes) => {
        return (<div>
            <Table hover responsive>
                <thead>
                    <tr className={tableHeaderClass}>
                        <th>IP</th>
                        <th>Hostname</th>
                        <th>Details</th>
                        <th>State</th>
                        <th>Config Time</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows(nodes)}
                </tbody>
            </Table>
        </div>
        );
    };

    renderOfflineWarning = () => {
        const { online } = this.props.appStates;
        if (!online)
            return <span className="m-2 badge badge-danger">Server Offline</span>
    }

    renderTablePainel = (tableName, filter, nodes, filteredNodes) => {
        return <div>
            {tableName}
            <input
                className="m-2"
                type="text"
                placeholder="Search Node"
                value={filter}
                onChange={e => this.setState({ filter: e.target.value })} />
            <a style={{ fontSize: 20 }}>
                {this.renderOfflineWarning()}
                <span className="m-2 badge badge-success">Detected Nodes {nodes.length}</span>
                <span className="m-2 badge badge-secondary">Displayed Nodes {filteredNodes.length}</span>
            </a>
        </div>

    };

    render() {
        const { filter, nodes } = this.props.appStates;
        const filteredNodes = nodes.filter(this.handleFiltering);
        let tableName = "Connected Nodes";
        let tableHeaderClass = "m-2 bg-primary text-white";
        return (
            <div>
                <div className="m-2">
                    {this.renderTablePainel(tableName, filter, nodes, filteredNodes)}
                    {this.renderTable(tableHeaderClass, filteredNodes)}
                </div>
            </div>
        );
    };
}
export default Monitor; 
