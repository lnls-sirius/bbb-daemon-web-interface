import React, { Component } from 'react';
import Chart from './Chart';

class Monitor extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>Monitor !
                <Chart/>
            </div>
        );
    };
}
export default Monitor;