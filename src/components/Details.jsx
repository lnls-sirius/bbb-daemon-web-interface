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
        return <div>
            <ModalBody>

            </ModalBody>
        </div>
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
                size={'lg'}>
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