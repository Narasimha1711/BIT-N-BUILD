import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './monthlyRevenue.css'; // Import the CSS styles
Chart.register(...registerables);

const Burn = ({ data1 }) => {
    const data = {
        labels: data1.map(item => `${item.month} ${item.year}`), // Last 6 months
        datasets: [
            {
                label: 'Monthly Burn Rate ($)',
                data: data1.map(item => item.burnRate), // Burn rate data
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Burn Rate (in $)',
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Months',
                },
            },
        },
    };

    return (
        // <div>
        //     <h2>Monthly Burn Rate for the Last 6 Months</h2>
        //     <Line data={data} options={options} />
        // </div>

        <div className="chart-container"> {/* Apply the chart container class */}
            <h2>Monthly Burn Rate for the Last 6 Months</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default Burn;
