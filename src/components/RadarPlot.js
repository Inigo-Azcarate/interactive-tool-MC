import React, { Component } from 'react';

export class RadarPlot extends Component {
    componentDidMount() {
        // Assuming Chart.js has been included in the <script> tag of your HTML
        // Check if Chart is available
        if (typeof Chart === 'undefined') {
            console.error('Chart.js is not loaded');
            return;
        }

        const ctx = document.getElementById('circleChart').getContext('2d');
        const circleChart = new Chart(ctx, {
            type: 'radar', // Example chart type
            data: {
                labels: ['Value 1', 'Value 2', 'Value 3'],
                datasets: [{
                    label: 'My First Dataset',
                    data: [65, 59, 80],
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        });
    }

    render() {
        return (
            <div id="radarplot" style={{ padding: "20px" }}>
                {/* Canvas element for Chart.js */}
                <canvas id="circleChart" width="400" height="400"></canvas>
            </div>
        );
    }
}






