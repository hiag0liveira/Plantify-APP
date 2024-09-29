import { MdKeyboardArrowRight } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import plantingsData from '../../public/plantios.json'
import imagem1 from '../assets/manage/bgStart.png'
import down from '../assets/manage/bsgraphdownarrow.svg'
import up from '../assets/manage/bsgraphuparrow.svg'
import arrow from '../assets/manage/arrow.svg'
import tempo from '../assets/platingIndStatic/previsaodotempo.png'
import chico from '../assets/plantify+/chico.svg'
import PlantingProgress from '../components/PlantingProgress'
import SoilHumidityChart from '../components/SoilHumidityChart'
import armazenamento from '../assets/platingIndStatic/fundoarmaze-svg.svg'
import transporte from '../assets/platingIndStatic/fundotransporte-svg.svg'
import duba from '../assets/platingIndStatic/fundoaduba-svg.svg'
import controle from '../assets/platingIndStatic/fundocontrole-svg.svg'
import equipe from '../assets/platingIndStatic/fundoequipe-svg.svg'
import fluxo from '../assets/platingIndStatic/fundofluxo-svg.svg'
import irrigacao from '../assets/platingIndStatic/fundoirriga-svg.svg'

const PlantingPage = () => {
	const { planting } = useParams<{ planting: string }>()

	const plantingData = plantingsData.find((item) => item.route === planting)

	return (
		<div>
			<div
				className="relative -mt-1 w-full bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)),url(${imagem1})`,
				}}
			>
				<div className="max-w-6xl mx-auto">
					<div className="p-4 rounded-lg flex items-center ">
						<div className="flex-shrink-0 rounded-full bg-white border border-green-500">
							<img
								className="h-20 w-20 object-cover z-10"
								style={{
									objectPosition: '100% -43%',
									borderTopLeftRadius: '50%',
									borderBottomLeftRadius: '50%',
									borderBottomRightRadius: '0%',
								}}
								src={chico}
								alt="Avatar"
							/>
						</div>

						<div className="ml-3">
							<div className="mb-2">
								<p className="text-white font-semibold text-base">
									<span>Olá, </span>
									<span className="italic">Carlos!</span> Precisando de uma
									ajudinha hoje?
								</p>
							</div>
							<div>
								<button className="bg-orange-500 text-white py-1 px-4 rounded-lg hover:bg-orange-600">
									Falar com o Chico
								</button>
							</div>
						</div>
					</div>
					<div className="pb-60"></div>
				</div>
			</div>
			<div className="max-w-6xl mx-auto -mt-52">
				<div className=" bg-white p-5 pb-10 rounded-lg shadow-2xl mb-16 relative w-full">
					<div>
						<h1 className="text-2xl font-semibold text-green-700 mb-4 flex items-center">
							Meus plantios <MdKeyboardArrowRight />
							{plantingData ? plantingData.name : 'Plantio Desconhecido'}
							<img
								src={plantingData?.image}
								alt={plantingData?.name}
								className="ml-2 h-5 w-5"
							/>
						</h1>
					</div>
					<div className="max-w-5xl mx-auto grid grid-cols-3 gap-4">
						<div className="col-span-1 grid place-items-center">
							{plantingData ? (
								<PlantingProgress plantingData={plantingData} />
							) : (
								<p>Desculpe, não encontramos informações para esse plantio.</p>
							)}

							<div
								className="bg-white mt-24 p-10 rounded-lg shadow bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url(${fluxo})`,
								}}
							>
								<div className="flex items-center -mt-6 -mx-4 justify-between">
									<h2 className="text-base font-bold text-green-600">
										Fluxo de caixa
									</h2>
									<span className="underline text-xs text-greenFigman">
										Acessar painel
									</span>
								</div>

								{plantingData ? (
									<div className="grid grid-cols-2 mt-1 gap-24 place-items-center">
										<div className="col-span-1 flex flex-col items-center gap-2 mt-5">
											<img
												src={up}
												alt="Ícone de Receitas"
												className="h-12 w-12"
											/>
											<p className="text-green-500 text-base font-light">
												{`R$${Intl.NumberFormat('pt-BR', {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}).format(plantingData.selling)}`}
											</p>
										</div>
										<div className="col-span-1 flex flex-col -ml-9 items-center gap-2 mt-5">
											<img
												src={down}
												alt="Ícone de Despesas"
												className="h-12 w-12"
											/>
											<p className="text-red-500 text-base font-light">
												{`R$${Intl.NumberFormat('pt-BR', {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												}).format(plantingData.invested)}`}
											</p>
										</div>
									</div>
								) : (
									<p>
										Desculpe, não encontramos informações para esse plantio.
									</p>
								)}
							</div>
						</div>
						<div className="col-span-1">
							{plantingData && (
								<SoilHumidityChart plantingData={plantingData} />
							)}{' '}
							<div className="flex flex-col items-center">
								<div
									className="bg-white text-gray-500 text-base mt-10 p-4 rounded-lg shadow  flex items-start justify-between w-72 bg-cover bg-center bg-no-repeat"
									style={{
										height: '5.5rem',
										backgroundImage: `url(${armazenamento})`,
									}}
								>
									<h1 className="font-bold"> Armazenamento</h1>
									<img className="h-4 w-4" src={arrow} />
								</div>
								<div
									className="bg-white text-gray-500 text-base mt-3 p-4 rounded-lg  shadow flex items-start justify-between w-72 bg-cover bg-center bg-no-repeat"
									style={{
										height: '5.5rem',
										backgroundImage: `url(${transporte})`,
									}}
								>
									<h1 className="font-bold"> Transporte</h1>
									<img className="h-4 w-4" src={arrow} />
								</div>
							</div>
						</div>
						<div className="col-span-1">
							<div className="flex flex-col items-center">
								<div
									className="bg-white text-gray-500 mt-2 text-base p-4 rounded-lg shadow flex items-start justify-between w-72 h-16 bg-cover bg-center bg-no-repeat"
									style={{
										height: '5.5rem',
										backgroundImage: `url(${irrigacao})`,
									}}
								>
									<h1 className="font-bold"> Irrigação</h1>
									<img className="h-4 w-4" src={arrow} />
								</div>
								<div
									className="bg-white text-gray-500 text-base mt-3 p-4 rounded-lg shadow flex items-start justify-between w-72  bg-cover bg-center bg-no-repeat"
									style={{ height: '5.5rem', backgroundImage: `url(${duba})` }}
								>
									<h1 className="font-bold"> Adubação</h1>
									<img className="h-4 w-4" src={arrow} />
								</div>
								<div
									className="bg-white text-gray-500 text-base mt-3 p-4 rounded-lg shadow flex items-start justify-between w-72 bg-cover bg-center bg-no-repeat"
									style={{
										height: '5.5rem',
										backgroundImage: `url(${controle})`,
									}}
								>
									<h1 className=" font-bold "> Controle de pragas</h1>
									<img className="h-4 w-4" src={arrow} />
								</div>
							</div>
							<div className="flex flex-col items-center">
								<div
									className="bg-white text-gray-500 text-base mt-10 p-4 rounded-lg shadow flex items-start justify-between w-72 bg-cover bg-center bg-no-repeat"
									style={{
										height: '5.5rem',
										backgroundImage: `url(${equipe})`,
									}}
								>
									<h1 className="font-bold"> Equipe</h1>
									<img className="h-4 w-4" src={arrow} />
								</div>
								<div
									className=" rounded-lg shadow flex items-start mt-3 w-72"
									style={{ height: '5.5rem' }}
								>
									<a
										href="https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/4953/camposdosgoytacazes-rj"
										target="_blank"
									>
										<img src={tempo} alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlantingPage
