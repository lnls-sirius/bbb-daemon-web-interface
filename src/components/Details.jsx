import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        }
    } 
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    renderContent = () => {
        const node = this.props.node;
        return (
        <div>
            <ModalBody>
            <form>
                
                <div className="form-group row">
                    <span className="input-group-text m-2" >{'Hostname '+ node['name']}</span>
                    <input type="text" className="m-2" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                    <button className="btn btn-outline-secondary m-2" type="button">Save</button>
                </div>
                <div>
                <div className="form-group row">
                    <span className="input-group-text m-2" >{'IP '+ node['ip_address']}</span>
                    <input type="text" className="m-2" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                </div>
                <div className="form-group row">
                    <span className="input-group-text m-2" >{'Mask'}</span>
                    <input type="text" className="m-2" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                </div>
                <div className="form-group row">
                    <span className="input-group-text m-2" >{'Gateway '}</span>
                    <input type="text" className="m-2" placeholder="" aria-label="" aria-describedby="basic-addon1"/>
                </div>
                    <button className="btn btn-outline-secondary m-2" type="button">Save</button>
                </div>
            </form>
            </ModalBody>
        </div>)
    }
    renderModal = () => {
        return <div>
            <Button onClick={this.toggle}>Details</Button>
            <Modal 
                fade={false}
                centered
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className} 
                size={'lg'}
                >
                <ModalHeader
                    toggle={this.toggle}>
                    Details
                </ModalHeader>
                {this.renderContent()}
            </Modal>
        </div>
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