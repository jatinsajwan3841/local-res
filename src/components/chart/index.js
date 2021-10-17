import React from 'react'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const LineChart = ({ data, darkMode }) => {
    const chartRef = React.createRef()
    const targetChartRef = React.useRef()

    React.useEffect(() => {
        if (targetChartRef.current !== undefined) {
            let repeat = targetChartRef.current.options
            if (darkMode) {
                repeat.plugins.legend.labels.color = 'rgba(255, 255, 255, 0.8)'
                repeat.scales.x.ticks.color = 'rgba(255, 255, 255, 0.8)'
                repeat.scales.y.ticks.color = 'rgba(255, 255, 255, 0.8)'
                repeat.scales.x.grid.color = 'rgba(255, 255, 255, 0.2)'
                repeat.scales.y.grid.color = 'rgba(255, 255, 255, 0.2)'
                targetChartRef.current.update()
            } else {
                repeat.plugins.legend.labels.color = 'rgba(0, 0, 0, 0.8)'
                repeat.scales.x.ticks.color = 'rgba(0, 0, 0, 0.8)'
                repeat.scales.y.ticks.color = 'rgba(0, 0, 0, 0.8)'
                repeat.scales.x.grid.color = 'rgba(0, 0, 0, 0.2)'
                repeat.scales.y.grid.color = 'rgba(0, 0, 0, 0.2)'
                targetChartRef.current.update()
            }
        }
    }, [darkMode])

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

        targetChartRef.current = new Chart(chartRef.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: labeldata,
                datasets: [
                    {
                        label: '% in each sem',
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
                        label: 'Total %',
                        data: total_array,
                        backgroundColor: ['rgba(54, 162, 235, 0.3)'],
                        borderColor: ['rgba(54, 162, 235, 1)'],
                        borderWidth: 2,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: darkMode
                                ? 'rgba(255, 255, 255, 0.8)'
                                : 'rgba(0, 0, 0, 0.8)',
                        },
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: darkMode
                                ? 'rgba(255, 255, 255, 0.8)'
                                : 'rgba(0, 0, 0, 0.8)',
                        },
                        grid: {
                            color: darkMode
                                ? 'rgba(255, 255, 255, 0.2)'
                                : 'rgba(0, 0, 0, 0.2)',
                        },
                    },
                    y: {
                        min: 0,
                        beginAtZero: true,
                        ticks: {
                            color: darkMode
                                ? 'rgba(255, 255, 255, 0.8)'
                                : 'rgba(0, 0, 0, 0.8)',
                        },
                        grid: {
                            color: darkMode
                                ? 'rgba(255, 255, 255, 0.2)'
                                : 'rgba(0, 0, 0, 0.2)',
                        },
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
