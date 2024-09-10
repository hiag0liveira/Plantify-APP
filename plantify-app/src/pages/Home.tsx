import { FC } from 'react'
import imagem1 from '../assets/home/fundoprincipalhome.png'
import { GrPersonalComputer } from 'react-icons/gr'
import { AiOutlineClockCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BsChatDots } from 'react-icons/bs'

const Home: FC = () => {
	return (
		<div>
			<div
				className="relative w-screen h-screen bg-cover bg-center"
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
			</div>

			<div>
				<h1>sec3</h1>
			</div>
			<div>
				<h1>sec4</h1>
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
