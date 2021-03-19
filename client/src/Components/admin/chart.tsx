import axios from 'axios';
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

interface ChartState {
    labels: any[],
    data: any[]
}

export default class Reports extends Component<any, ChartState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            labels: [], data: []
        }
    }

    private getChartData = async () => {
        try {
            axios.defaults.headers.common['authorization'] = sessionStorage.getItem("userToken");
            const res = await axios.get("http://35.239.233.246:3001/users/");
            const labels = [];
            const data = [];
            for(let i=0; i < res.data.length; i++){
                labels.push(JSON.stringify(res.data[i].vacationId)+"#: "+res.data[i].destination);
                data.push(res.data[i].followers);
            }
            this.setState({ labels: labels, data: data});
        }
        catch (e) {
            alert(e.response.data.error);
        }
    }
    componentDidMount() {
        this.getChartData();
    }
    public render() {
        return (
            <div>
                <Bar
                    height={450}
                    width={700}
                    data={
                        {
                            labels: this.state.labels,
                            datasets: [{
                                label: "followers",
                                backgroundColor: '#48dbfb',
                                borderColor: '#46adc4',
                                borderWidth: 1,
                                data: this.state.data
                            }]
                        }
                    }
                    options={{
                        title: {
                            display: true,
                            text: 'Vacations Subscribe Reports',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }

                    }}
                />
            </div>
        );
    }
}