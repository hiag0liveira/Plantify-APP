import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import dayjs from 'dayjs'

ChartJS.register(ArcElement, Tooltip, Legend)

interface SoilHumidity {
	date: string
	humidity: number
}

interface PlantingData {
	name: string
	image: string
	lastEdited: string
	route: string
	plantingDate: string
	soilHumidity: SoilHumidity[]
	harvestForecast: string
}

interface PlantingProgressProps {
	plantingData: PlantingData | null
}

const PlantingProgress: React.FC<PlantingProgressProps> = ({
	plantingData,
}) => {
	if (!plantingData) {
		return <p>Desculpe, não encontramos informações para esse plantio.</p>
	}

	const plantingDate = dayjs(plantingData.plantingDate, 'DD/MM/YYYY')
	const harvestForecast = dayjs(plantingData.harvestForecast, 'DD/MM/YYYY')
	const currentDate = dayjs()

	if (!plantingDate.isValid() || !harvestForecast.isValid()) {
		return <p>Data inválida</p>
	}

	const totalDays = harvestForecast.diff(plantingDate, 'day')

	const daysPassed = currentDate.diff(plantingDate, 'day')

	const progressPercentage =
		totalDays > 0
			? Math.min(Math.max((daysPassed / totalDays) * 100, 0), 100)
			: 0

	const data = {
		datasets: [
			{
				data: [progressPercentage, 100 - progressPercentage],
				backgroundColor: ['#6ebe44', '#E0E0E0'],
				borderWidth: 0,
				borderRadius: [50, 0],
				rotation: 90,
				circumference: 360,
				cutout: '65%',
			},
			{
				data: [100],
				backgroundColor: ['transparent'],
				borderColor: '#E0E0E0',
				borderWidth: 13,
				cutout: '88%',
			},
		],
	}

	return (
		<div className="relative w-56 h-56 flex flex-col items-center font-medium">
			<Doughnut data={data} />
			<h1
				className="text-green-700 text-6xl"
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					margin: 0,
				}}
			>
				{Math.round(progressPercentage)}%
			</h1>
			<div className="mt-4 text-green-600 text-center">
				<p>
					Data de plantio:
					{new Date(plantingData.plantingDate).toLocaleDateString('pt-BR')}
				</p>
				<p>
					Data de colheita:
					{new Date(plantingData.harvestForecast).toLocaleDateString('pt-BR')}
				</p>
			</div>
		</div>
	)
}

export default PlantingProgress
