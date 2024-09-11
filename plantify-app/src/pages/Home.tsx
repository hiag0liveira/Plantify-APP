import { FC } from 'react'
import imagem1 from '../assets/home/fundoprincipalhome.png'
import imagem2 from '../assets/home/chamadaplantifymais72ppi.png'
import logoWhitePlus from '../assets/logos/Plantify+ LOGO white.svg'
import { GrPersonalComputer } from 'react-icons/gr'
import { AiOutlineClockCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'
import TestimonialSlider from '../components/TestimonialSlider'
import { RiDoubleQuotesL } from 'react-icons/ri'

const Home: FC = () => {
	return (
		<div>
			<div
				className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url(${imagem1})`,
				}}
			>
				{/* Texto e botão sobrepostos */}
				<div
					className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 "
					style={{
						marginTop: '20%',
					}}
				>
					<h4 className="text-white text-4xl md:text-5xl font-light leading-tight">
						SUA LAVOURA <span className="font-bold italic">DIGITAL</span>
						<br />
						SUA GESTÃO <span className="font-bold italic">FACILITADA</span>
					</h4>
					<button className="mt-6 px-6 py-2 bg-orange-500 text-white text-lg rounded-md hover:bg-orange-600 transition duration-300">
						Saiba mais
					</button>
				</div>
			</div>

			<div className="text-center py-14 max-w-7xl  mx-auto ">
				<h2 className="text-4xl font-bold text-green-600 mb-8">
					Vantagens de ser Plantify
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-8">
					<div className="flex flex-col items-center">
						<GrPersonalComputer
							size={120}
							className="text-6xl mb-4 "
							style={{ color: '#6ebe44' }}
						/>
						<h3 className="text-xl font-semibold">Gestão centralizada:</h3>
						<p className="text-base">
							Simplifica o monitoramento de todas as atividades da lavoura em um
							único lugar.
						</p>
					</div>

					{/* Eficiência Operacional */}
					<div className="flex flex-col items-center">
						<AiOutlinePlusCircle
							size={120}
							className="text-6xl mb-4"
							style={{ color: '#6ebe44' }}
						/>
						<h3 className="text-xl font-semibold">Eficiência operacional:</h3>
						<p className="text-base">
							Facilita o controle de armazenamento, entrega e vendas, aumentando
							a produtividade.
						</p>
					</div>

					{/* Comunidade Colaborativa */}
					<div className="flex flex-col items-center">
						<BsChatDots
							size={120}
							className="text-6xl mb-4"
							style={{ color: '#6ebe44' }}
						/>
						<h3 className="text-xl font-semibold">Comunidade colaborativa:</h3>
						<p className="text-base">
							Produtores podem trocar experiências e melhores práticas no fórum
							integrado.
						</p>
					</div>

					{/* Monitoramento em Tempo Real */}
					<div className="flex flex-col items-center">
						<AiOutlineClockCircle
							size={120}
							className="text-6xl"
							style={{ color: '#6ebe44' }}
						/>
						<h3 className="text-xl font-semibold mt-4">
							Monitoramento em tempo real:
						</h3>
						<p className="text-base">
							Acesso instantâneo a dados de desempenho da lavoura e condições
							climáticas.
						</p>
					</div>
				</div>
				<div className="flex mt-20">
					<RiDoubleQuotesL size={160} className="text-orange-400 ml-40" />
					<TestimonialSlider />
				</div>
			</div>

			<div
				className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat flex items-center"
				style={{
					backgroundImage: `url(${imagem2})`,
				}}
			>
				<div className="w-full h-full flex flex-col justify-center items-center px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full max-w-7xl">
						<div></div>
						<div className="flex flex-col items-start space-y-6">
							<div>
								<img
									src={logoWhitePlus}
									alt="Plantify Logo"
									style={{ width: '440px', height: 'auto' }}
								/>
							</div>
						</div>
						<div></div>
						<div className="grid grid-cols-2 ">
							<div className="flex items-center space-x-4">
								<div className="w-1 h-1 rounded-full bg-white"></div>
								<h3 className="text-xl text-white">Gestão de Lavoura</h3>
							</div>

							{/* Assistente Virtual */}
							<div className="flex items-center space-x-4">
								<div className="w-1 h-1 rounded-full bg-white"></div>
								<h3 className="text-xl text-white">Assistente Virtual</h3>
							</div>

							{/* Clube de Benefícios */}
							<div className="flex items-center space-x-4">
								<div className="w-1 h-1 rounded-full bg-white"></div>
								<h3 className="text-xl text-white">Clube de Benefícios</h3>
							</div>

							{/* Consultorias */}
							<div className="flex items-center space-x-4">
								<div className="w-1 h-1 rounded-full bg-white"></div>
								<h3 className="text-xl  text-white">Consultorias</h3>
							</div>
							<span className="mt-3 text-xl font-semibold italic text-white">
								E muito mais!
							</span>
						</div>
						<div></div>
						<div className="flex flex-col items-start ">
							<button className=" px-4 py-1 ml-44 bg-orange-500 text-white text-lg rounded-md hover:bg-orange-600 transition duration-300">
								Seja Plantify+
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center mt-12 max-w-4xl mx-auto ">
				<h2 className="text-3xl font-bold text-green-700 mb-8">
					Nossos resultados
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-24">
					<div className="flex flex-col items-center justify-center bg-white border border-green-600 rounded-md p-4 text-center w-55 h-40">
						<h3 className="text-6xl text-green-700">+500</h3>
						<p className="text-green-700 text-xl">mil hectares</p>
					</div>
					<div className="flex flex-col items-center justify-center bg-white border border-green-600 rounded-md p-4 text-center w-55">
						<h3 className="text-6xl text-green-700">+200</h3>
						<p className="text-green-700 text-xl">fazendas</p>
					</div>
					<div className="flex flex-col items-center justify-center bg-white border border-green-600 rounded-md p-4 text-center w-55">
						<h3 className="text-6xl text-green-700">+100</h3>
						<p className="text-green-700 text-xl">usuários</p>
					</div>
				</div>
				<button className="bg-white border border-orange-500 text-orange-500 hover:bg-orange-600 hover:text-white font-bold py-2 px-4 rounded mt-8">
					Seja um parceiro Plantify
				</button>
			</div>

			<div>
				<h1>sec5</h1>
			</div>
			<div>
				<h1>sec6</h1>
			</div>
		</div>
	)
}

export default Home
