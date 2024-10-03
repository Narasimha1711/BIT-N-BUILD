// MonthlyRevenueChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './monthlyRevenue.css'; // Import the CSS styles

Chart.register(...registerables);

const MonthlyRevenueChart = ({ data1 }) => {
    console.log(data1)
    const data = {
        labels: data1?.map(item => item.month), // Last 6 months
        datasets: [
            {
                label: 'Monthly Revenue ($)',
                data: data1?.map(item => item.monthlyRevenue), // Replace with your revenue data
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
                    text: 'Revenue (in $)',
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
        <div className="chart-container"> {/* Apply the chart container class */}
            <h2 className="chart-title">Monthly Revenue for the Last 6 Months</h2> {/* Apply the chart title class */}
            <Line data={data} options={options} />
        </div>
    );
};

export default MonthlyRevenueChart;
