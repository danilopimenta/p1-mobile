import React, { useEffect, useState } from "react";
import { Chart } from "primereact/chart";

export default function ChartUF({ metrics }) {
    const [labels, setLabels] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLabels(Object.keys(metrics));
        setData(Object.values(metrics));
    }, [metrics]);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Buscas feitas',
                data: data,
                borderWidth: 1
            }
        ]
    };

    const chartOptions = {
        plugins: {
            legend: {
                display: true
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <Chart
            type="pie"
            data={chartData}
            options={chartOptions}
            className="w-full md:w-30rem"
        />
    );
}
