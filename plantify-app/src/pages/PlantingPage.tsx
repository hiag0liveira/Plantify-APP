import { useParams } from 'react-router-dom'
import plantingsData from '../../public/plantios.json'

const PlantingPage = () => {
	const { planting } = useParams<{ planting: string }>()

	const plantingData = plantingsData.find((item) => item.route === planting)

	return (
		<div>
			<h1>
				Página de {plantingData ? plantingData.name : 'Plantio Desconhecido'}
			</h1>
			{plantingData ? (
				<div>
					<img src={plantingData.image} alt={plantingData.name} />
					<p>Última edição: {plantingData.lastEdited}</p>
				</div>
			) : (
				<p>Desculpe, não encontramos informações para esse plantio.</p>
			)}
		</div>
	)
}

export default PlantingPage
