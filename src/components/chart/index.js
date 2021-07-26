import React from 'react'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const LineChart = ({ data }) => {
    const chartRef = React.createRef()
    const targetChartRef = React.useRef()

    React.useEffect(() => {
        if (targetChartRef.current !== undefined) {
            const labeldata = data.map((i) => {
                return i.sem
            })
            const datadata = data.map((i) => {
                return i.percentage
            })
            labeldata.pop()
            datadata.pop()
            const total_array = [...Array(data.length)].fill(
                data[data.length - 1].percentage,
            )

            targetChartRef.current.data.labels = labeldata
            targetChartRef.current.data.datasets[0].data = datadata
            targetChartRef.current.data.datasets[1].data = total_array
            targetChartRef.current.update()
        }
    }, [data])

    React.useEffect(() => {
        const labeldata = [data[0].sem]
        const datadata = [data[0].percentage]
        const total_array = []

        targetChartRef.current = new Chart(chartRef.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: labeldata,
                datasets: [
                    {
                        label: 'Percentage in each sem',
                        data: datadata,
                        backgroundColor: ['rgba(255, 99, 132, 0.3)'],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        fill: {
                            target: 'origin',
                        },
                        borderWidth: 2,
                        cubicInterpolationMode: 'default',
                        tension: 0.3,
                    },
                    {
                        label: 'Total Percentage',
                        data: total_array,
                        backgroundColor: ['rgba(54, 162, 235, 0.3)'],
                        borderColor: ['rgba(54, 162, 235, 1)'],
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        min: 0,
                        beginAtZero: true,
                    },
                },
            },
        })
    }, [])
    return (
        <div style={{ marginTop: '35px' }}>
            <canvas ref={chartRef} />
        </div>
    )
}
export default LineChart