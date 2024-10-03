import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './monthlyRevenue.css'; // Import the CSS styles

Chart.register(...registerables);

const MonthlyActiveUsersChart = ({ data1 }) => {

    if (!data1) {
        return <div>Loading chart data...</div>;
      }

    const chartData = {
        labels: data1.map(item => `${item.month} ${item.year}`),
        datasets: [
            {
                label: 'Monthly Active Users',
                data: data1.map(item => item.monthlyActiveUsers),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    // return <Line data={chartData} />;
    return (
    <div className="chart-container"> {/* Apply the chart container class */}
    <h2 className="chart-title">Monthly Active Users for the Last 6 Months</h2> {/* Apply the chart title class */}
     <Line data={chartData} />;
</div>
     )
    
};

export default MonthlyActiveUsersChart;
