import React from 'react'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const LineChart = ({ data }) => {
    const chartRef = React.createRef()
    const targetChartRef = React.useRef()

    React.useEffect(() => {
        const labeldata = data.map((i) => {
            return i.sem
        })
        const datadata = data.map((i) => {
            return i.percentage
        })
        //labeldata.pop()
        //datadata.pop()

        targetChartRef.current !== undefined && targetChartRef.current.destroy()

        targetChartRef.current = new Chart(chartRef.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: labeldata,
                datasets: [
                    {
                        label: 'Percentage in each sem',
                        data: datadata,
                        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                        fill: {
                            target: 'origin',
                        },
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        max: 100,
                        min: 0,
                        beginAtZero: true,
                    },
                },
            },
        })
    }, [data])
    return (
        <div style={{ marginTop: '25px' }}>
            <canvas ref={chartRef} />
        </div>
    )
}
export default LineChart
