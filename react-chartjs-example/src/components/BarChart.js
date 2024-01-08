import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart ({ chartData }) {
    return (
        <div>
            <h2>Look at this Bar Chart!</h2>
            <Bar
            data={chartData}
            option={{
                plugins: {
                    title: {
                        display: true,
                        text: "Bar Chart"
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

export default BarChart;