import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'nodes': [],
            'filter': ''
        }
    }

    componentDidMount() {
        const refreshInterval = this.props.refreshInterval;
        const baseUrl = this.props.baseUrl;
        this.loadData(baseUrl);
        this.intervalId = setInterval(this.loadData, refreshInterval, baseUrl);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    loadData = async (baseUrl) => {
        var self = this;
        // Make a request
        axios.get(baseUrl + '/nodes')
            .then(function (response) {
                self.setState({ 'nodes': response.data });
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }

    handleReboot = (ip) => {
        axios.post(this.props.baseUrl + '/node/reboot', {
            ip: ip
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
                            <Button
                                className="btn btn-danger"
                                onClick={() => this.handleReboot(node['ip_address'])}>
                                Reboot
                        </Button>
                        </td>
                        <td>
                            <Button
                                className="btn btn-info">
                                Details
                        </Button>
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

    renderTablePainel = (tableName, filter, nodes, filteredNodes) => {
        return <div>
            {tableName}
            <input
                className="m-2"
                type="text"
                placeholder="Search Node"
                value={filter}
                onChange={e => this.setState({ filter: e.target.value })} />
            <span className="m-2 badge badge-success">Detected Nodes {nodes.length}</span>
            <span className="m-2 badge badge-secondary">Displayed Nodes {filteredNodes.length}</span>
        </div>

    };

    render() {
        const { filter, nodes } = this.state;
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