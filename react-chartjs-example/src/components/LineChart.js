import React from "react";
import { Line } from "react-chartjs-2";

function LineChart ({ chartData }) {
    return (
        <div>
            <h2>Look at this Line Chart!</h2>
            <Line 
            data={chartData}
            option={{
                plugins: {
                    title: {
                        display: true,
                        text: "Line Chart"
                    },
                    legend: {
                        display: false
                    }
                }
            }}
            />
        </div>
    );
}

export default LineChart;