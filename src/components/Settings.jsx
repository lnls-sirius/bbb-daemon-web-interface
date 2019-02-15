import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUrl: '',
            modal: false
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    renderContent = () => {
        const { baseUrl } = this.props.appStates;
        const { handleUpdateUrl } = this.props.appFunctions;
        const { newUrl } = this.state;

        return <div>
            <ModalBody>
                <form>
                    <div className='form-group row'>
                        <div className='col-md-5'>
                            <label> {baseUrl} </label>
                        </div>
                        <div className='col-md-5'>
                            <input
                                className='m-2'
                                type='text'
                                placeholder={baseUrl}
                                onChange={e => this.setState({ newUrl: e.target.value })} />
                        </div>
                        <div className='col-md-2'>
                            <button
                                className='m-2'
                                type='button'
                                className='btn btn-primary'
                                onClick={() => handleUpdateUrl(newUrl)}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </ModalBody>
          </div>
    }
    renderModal = () => {
        return <div>
            <Button onClick={this.toggle}>General Settings</Button>
            <Modal 
                fade={false}
                isOpen={this.state.modal}
                toggle={this.toggle}
                className={this.props.className}
                size={'lg'}>
                <ModalHeader 
                    toggle={this.toggle}>
                    General Settings
                </ModalHeader>
                {this.renderContent()}
            </Modal>
        </div>
    }

    render() {
        return (
            <a>
                {this.renderModal()}
            </a>
        );
    }
}
export default Settings;