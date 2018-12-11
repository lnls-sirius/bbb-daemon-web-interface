import React, { Component } from 'react';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUrl: ''
        }
    }
 
    render() {
        const { url, handleUpdateUrl } = this.props;
        const { newUrl} = this.state;
        return (
            <div>
                <div className='form-inline'>
                    <div className='form-group mb-2'>
                        <label
                            className='m-2'>Server url: {url}
                        </label>
                        <input
                            className='m-2'
                            type='text'
                            placeholder={url}
                            onChange={e => this.setState({ newUrl: e.target.value })} />
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
            </div>
        );
    }
}
export default Settings;