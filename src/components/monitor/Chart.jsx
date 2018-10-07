import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
    }
    
 
    static defaultProps = {
        // color = {
        //     red: 'rgb(255, 99, 132, 0.8)',
        //     orange: 'rgb(255, 159, 64, 0.8)',
        //     yellow: 'rgb(255, 205, 86, 0.8)',
        //     green: 'rgb(75, 192, 192, 0.8)',
        //     blue: 'rgb(54, 162, 235, 0.8)',
        //     purple: 'rgb(153, 102, 255, 0.8)',
        //     grey: 'rgb(201, 203, 207, 0.8)'
        // },
        data : {
            labels: ['DefaultData1', 'DefaultData2', 'DefaultData3'],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: [ 
                    'rgb(54, 162, 235, 0.8)',
                    'rgb(255, 99, 132, 0.8)',
                    'rgb(201, 203, 207, 0.8)'
                ],
                borderWidth: 1,
                data: [
                    13,51,74
                ]
            }]

        }
    };

    render() {
        return (
            <Bar
                data={this.props.data} 
                options={{}}
            />
        );
    };
}
export default Chart;