import { FC } from 'react'
import fundo from '../assets/about/fotofundoquemsomos.png'
import plantify from '../assets/logos/Plantify LOGO white.svg'
import missao from '../assets/about/missao.png'
import visao from '../assets/about/visao.png'
import valores from '../assets/about/valores.png'
import galera from '../assets/about/galera2.jpg'
import { IoCheckmarkCircle } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const About: FC = () => {
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/plus')
		window.scrollTo(0, 0)
	}

	return (
		<div className="relative w-full h-auto text-white">
			<div
				className="relative bg-cover bg-center h-64 sm:h-80 md:h-96"
				style={{ backgroundImage: `url(${fundo})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-10"></div>
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
					<img src={plantify} />
					<p className="italic text-2xl sm:text-3xl md:text-4xl">
						Cultivando Tecnologia, Colhendo Resultados
					</p>
				</div>
			</div>

			<div className="p-8 bg-greenFigman">
				<p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed text-center whitespace-normal">
					A Plantify Soluções é um projeto de empreendedorismo criado por
					estudantes <br />
					para ajudar pequenos agricultores a gerenciar suas propriedades de
					forma <br />
					eficiente e moderna. O site oferece monitoramento de safra,
					previsão <br />
					climática, controle de insumos e venda de produtos, tudo voltado para{' '}
					<br />
					dispositivos de baixo custo e com pouca internet. O objetivo é
					democratizar o <br />
					acesso à tecnologia, melhorando a produtividade e promovendo a <br />
					sustentabilidade entre os agricultores.
				</p>
			</div>

			<div className="mx-auto max-w-7xl">
				<div className="flex mt-12 ml-12 mb-12 items-center">
					<div className="mr-8 ml-8">
						<h1 className="text-orange-500 text-4xl mb-6 font-bold">
							Nossa Missão
						</h1>
						<p className="text-black text-2xl">
							Simplificar e otimizar a vida dos <br />
							pequenos e médios produtores <br />
							rurais, fornecendo ferramentas <br />
							tecnológicas que tornam a gestão <br />
							da produção agrícola mais <br />
							eficiente, sustentável e lucrativa.
						</p>
					</div>
					<div className="ml-44">
						<img src={missao} className="w-auto" />
					</div>
				</div>

				<div className="flex mt-12 ml-12 mb-12 items-center">
					<div className="">
						<img src={visao} className="w-auto" />
					</div>
					<div className="ml-48">
						<h1 className="text-orange-500 text-4xl mb-6 font-bold text-right">
							Nossa Visão
						</h1>
						<p className="text-black text-2xl text-right">
							Revolucionar o modo como a <br />
							agricultura é gerida, tornando a <br />
							Plantify a referência em tecnologia <br />
							e sustentabilidade, permitindo que <br />
							os produtores melhorem suas <br />
							colheitas e construam uma rede <br />
							de colaboração ativa.
						</p>
					</div>
				</div>

				<div className="flex mt-12 ml-12 items-center">
					<div className="mr-8 ml-8">
						<h1 className="text-orange-500 text-4xl mb-6 font-bold">
							Nossos Valores
						</h1>
						<p className="text-black text-2xl flex items-center">
							<IoCheckmarkCircle className="mr-2 text-green-500" /> Inovação
						</p>
						<p className="text-black text-2xl flex items-center">
							<IoCheckmarkCircle className="mr-2 text-green-500" /> Colaboração
						</p>
						<p className="text-black text-2xl flex items-center">
							<IoCheckmarkCircle className="mr-2 text-green-500" />{' '}
							transparência
						</p>
						<p className="text-black text-2xl flex items-center">
							<IoCheckmarkCircle className="mr-2 text-green-500" />{' '}
							Sustentabilidade
						</p>
						<p className="text-black text-2xl flex items-center">
							<IoCheckmarkCircle className="mr-2 text-green-500" /> Excelência
						</p>
					</div>
					<div className="ml-64">
						<img src={valores} className="w-auto" />
					</div>
				</div>
			</div>
			<div>
				<div
					className="relative h-screen w-screen bg-cover bg-center"
					style={{
						backgroundImage: `url(${galera})`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}}
				></div>

				<div className="flex justify-center mb-10">
					<button
						className="bg-white border-orange-500 text-orange-500 border-4 py-3 px-6 text-3xl font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-colors duration-300"
						onClick={handleClick}
					>
						Seja um parceiro Plantify
					</button>
				</div>
			</div>
		</div>
	)
}

export default About
