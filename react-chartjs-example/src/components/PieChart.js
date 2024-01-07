import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart ({ chartData }) {
    return (
        <div>
            <h2>Look at this Pie Chart!</h2>
            <Pie 
            data={chartData}
            option={{
                plugins: {
                    title: {
                        display: true,
                        text: "Pie Chart"
                    }
                }
            }}
            />
        </div>
    );
}

export default PieChart;