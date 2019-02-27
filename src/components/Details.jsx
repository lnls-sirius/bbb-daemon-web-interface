import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { reHostname, reIpNetworkIp } from '../regex';

class HostnameInp extends Component {
    constructor(props){
        super(props);
        this.state = {
            hostname:'',
            newHostname : '',
            validInput: true
        };
    };

    handleInputChange = (evt) =>{
        this.setState({newHostname:evt.target.value, validInput:reHostname.test(evt.target.value)});
    }

    renderError = ()=>{
        if(this.state.validInput){
        }else{
            return (<div className="alert alert-danger">This is not a valid hostname. Please remove all spaces and :.</div>);
        }
    }

    render(){
        let node = this.props.node;
        return (
            <div className="form-group">
                <span className="input-group-text mt-1 mb-1" >{'Hostname '+ node['name']}</span>
                <input type="text" className="form-control mt-1 mb-1"
                    placeholder="" aria-label="" aria-describedby="basic-addon1"
                    value={this.state.newHostname}
                    onChange={this.handleInputChange}
                    />
                    <button
                        className="btn btn-outline-secondary mt-1 mb-1" type="button"
                        onClick={()=>this.props.appFunctions.handleNewHostname(node['ip_address'], this.state.newHostname) }
                    >Set Hostname</button>
                    {this.renderError()}
            </div>)
    };
}
class IpNetworkMaskInp extends Component {
    constructor(props){
        super(props);
        this.state = {
            ip:'',
            newIp : '',
            validInput: true
        };
    };

    handleInputChange = (evt) =>{
        this.setState({newIp:evt.target.value, validInput:reIpNetworkIp.test(evt.target.value)});
    }

    renderError = ()=>{
        if(this.state.validInput){
        }else{
            return (<div className="alert alert-danger">Invalid inut. Please match the pattern IP NETWORK IP.</div>);
        }
    }

    render(){
        let {node, appFunctions} = this.props;
        return (
            <div className="form-group">
                <span className="input-group-text mt-1 mb-1" >{'IP '+ node['ip_address']}</span>
                <input
                    value={this.state.newIp}
                    onChange={this.handleInputChange}
                    type="text" className="form-control mt-1 mb-1"
                    placeholder="Ip Network Gateway"
                    aria-label="" aria-describedby="basic-addon1"/>
                <button
                    className="btn btn-outline-secondary mt-1 mb-1"
                    type="button"
                    onClick={() => appFunctions.handleNewIp(node['ip_address'], this.state.newIp)}
                >Set Ip Address</button>
                {this.renderError()}
            </div>)
    };
}

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            newIp:'',
            newIpFailure :false,
            newHostname:''
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleNewIp = ()=>{
        let success = this.props.appFunctions
            .handleNewIp(this.props.node['ip_address'], this.state.newIp);
        this.setState({newIpFailure:success});
    }

    renderContent = () => {
        const node = this.props.node;
        return (
        <div>
            <ModalBody>
                <form>
                    <HostnameInp node={this.props.node} appFunctions={this.props.appFunctions}/>
                    <IpNetworkMaskInp node={this.props.node} appFunctions={this.props.appFunctions}/>
                </form>
            </ModalBody>
        </div>)
    }
    renderModal = () => {
        return (
            <div>
                <Button onClick={this.toggle}>Details</Button>
                <Modal
                    fade={false} centered isOpen={this.state.modal} size={'lg'}
                    toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>
                        Details
                    </ModalHeader>
                    {this.renderContent()}
                </Modal>
            </div>);
    }

    render() {
        return (
            <div>
                {this.renderModal()}
            </div>
        );
    }
}
export default Details;