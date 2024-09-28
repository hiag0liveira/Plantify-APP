import React from 'react'
import { Line } from 'react-chartjs-2'
import arrow from '../assets/manage/arrow.svg'

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend,
} from 'chart.js'

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Legend
)

interface SoilHumidityData {
	date: string
	humidity: number
}

interface PlantingData {
	soilHumidity: SoilHumidityData[]
}

interface SoilHumidityChartProps {
	plantingData: PlantingData | undefined
}

const SoilHumidityChart: React.FC<SoilHumidityChartProps> = ({
	plantingData,
}) => {
	const labels = plantingData
		? plantingData.soilHumidity.map((data) => data.date)
		: []
	const humidityData = plantingData
		? plantingData.soilHumidity.map((data) => data.humidity)
		: []

	const data = {
		labels: labels,
		datasets: [
			{
				label: 'Umidade do Solo (%)',
				data: humidityData,
				fill: false,
				borderColor: '#00a53c',
				pointBackgroundColor: '#fcfcfc',
				tension: 0.1,
			},
		],
	}

	const options = {
		maintainAspectRatio: false,
		scales: {
			y: {
				title: {
					display: true,
					text: '%',
				},
				grid: {
					display: false,
				},
			},
			x: {
				grid: {
					display: false,
				},
				ticks: {
					font: {
						size: 10,
					},
					autoSkip: true,

					maxTicksLimit: 15,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		devicePixelRatio: 2,
	}

	return (
		<div className="shadow rounded-lg pb-10">
			<div className="h-64 p-3">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-bold mb-4 text-gray-500">
						Solo - Umidade
					</h2>
					<img className="h-4 w-4 mb-4" src={arrow} />
				</div>
				<Line data={data} options={options} />
			</div>
		</div>
	)
}

export default SoilHumidityChart
