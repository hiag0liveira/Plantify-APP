import { FC } from 'react'
import fundoPlantify from '../assets/plantify+/plantação de feijão.jpg'
import chico from '../assets/plantify+/chico.svg'
import imgFundoChico from '../assets/plantify+/imgfundochico.png'
import researching from '../assets/plantify+/person-researching-market-trends-computer-taking-notes 1.png'
import plantifyLogo from '../assets/logos/Plantify+ LOGO white.svg'
import { PiFarm } from 'react-icons/pi'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaChalkboardTeacher } from 'react-icons/fa'

const Plus: FC = () => {
	return (
		<div>
			{/* Seção do fundo principal */}
			<div
				className="relative w-full h-[100vh] bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${fundoPlantify})` }}
			>
				<div className="absolute inset-0 bg-black opacity-40 z-11"></div>
				<div className="relative flex flex-col justify-center items-center h-full z-20">
					<div className="flex justify-center items-center mb-4">
						<img
							src={plantifyLogo}
							alt="Logo"
							className="w-auto max-w-xs md:max-w-md lg:max-w-lg filter brightness-100"
						/>
					</div>

					<div className="text-center px-4 md:px-16">
						<h4 className="text-white text-base md:text-lg lg:text-xl font-light leading-tight">
							<b>O Plantify+ foi pensado para facilitar sua vida no campo</b>,
							<br />
							<b>aumentar sua produtividade e tornar sua operação</b>
							<br />
							<b>agrícola mais lucrativa. Com essas ferramentas e suporte,</b>
							<br />
							<b>você terá tudo o que precisa para cuidar da sua lavoura</b>
							<br />
							<b>com mais segurança e eficiência.</b>
						</h4>
					</div>
				</div>
			</div>

			{/* Seção de vantagens */}
			<div className="bg-white py-10 px-4 md:px-10 lg:px-20">
				<div className="text-center mb-12">
					<h2 className="text-green-700 text-2xl md:text-3xl lg:text-4xl font-semibold">
						Conheça melhor as vantagens de ser um <br /> assinante do
						<span className="text-green-500 font-bold"> Plantify+</span>
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="text-center">
						<div className="flex justify-center items-center mb-4">
							<PiFarm className="w-16 h-16 text-green-500" />
						</div>
						<h3 className="text-green-700 text-lg font-semibold mb-2">
							Gestão de Lavoura
						</h3>
						<p className="text-gray-600">
							<b>
								Tenha um acompanhamento ainda <br /> mais detalhado de cada
								etapa do <br /> cultivo, como o momento certo de <br /> irrigar,
								adubar e colher, garantindo <br /> uma colheita saudável e
								produtiva.
							</b>
						</p>
					</div>

					<div className="text-center">
						<div className="flex justify-center items-center mb-4">
							<AiOutlineShopping className="w-16 h-16 text-green-500" />
						</div>
						<h3 className="text-green-700 text-lg font-semibold mb-2">
							Clube de Benefícios
						</h3>
						<p className="text-gray-600">
							<b>
								Faça parte do nosso clube exclusivo <br /> que oferece vários
								descontos e muita <br /> facilidade. Além disso, você pode{' '}
								<br /> ganhar brindes especiais e ainda se <br /> cadastrar como
								um vendedor na <br /> nossa querida Quermesse.
							</b>
						</p>
					</div>

					<div className="text-center">
						<div className="flex justify-center items-center mb-4">
							<FaChalkboardTeacher className="w-16 h-16 text-green-500" />
						</div>
						<h3 className="text-green-700 text-lg font-semibold mb-2">
							Consultoria Personalizada
						</h3>
						<p className="text-gray-600">
							<b>
								O Plantify+ oferece acesso a <br /> consultores especializados
								que <br /> podem te ajudar a planejar sua <br /> produção,
								melhorar suas práticas <br /> agrícolas e até encontrar novas{' '}
								<br /> oportunidades de venda.
							</b>
						</p>
					</div>
				</div>
			</div>

			{/* Seção do planejamento financeiro */}
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-1/2">
					<img src={researching} alt="researching" className="w-full h-auto" />
				</div>
				<div className="w-full md:w-1/2 bg-green-700 text-white flex flex-col items-center justify-center">
					<h1 className="text-3xl md:text-4xl font-bold italic mb-8 pl-5">
						Planejamento Financeiro <br />
						com Plantify+
					</h1>
					<p className="text-white text-left text-lg md:text-xl mb-4">
						Com o nosso plano premium, você consegue <br />
						acompanhar todos os custos, entradas e saídas <br />
						da sua propriedade com muita facilidade, <br />
						criando relatórios detalhados que facilitam a <br />
						visualização de despesas e lucros. Acompanhe <br />
						de perto o fluxo de cada plantio de sua lavoura.
					</p>
					<p className="text-white text-left text-lg md:text-xl">
						Com essa ferramenta, você pode fazer <br />
						previsões financeiras, planejar orçamentos e <br />
						identificar oportunidades para economizar e <br />
						investir de forma mais eficiente, garantindo uma <br />
						gestão financeira mais eficaz e estratégica.
					</p>
				</div>
			</div>

			<div className="relative w-full">
				{/* Contêiner principal */}
				<div className="relative flex flex-col md:flex-row justify-center items-center p-6">
					{/* Background cobrindo toda a seção */}
					<div
						className="absolute inset-0 w-full h-full z-10"
						style={{
							backgroundImage: `url(${imgFundoChico})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center 30%',
						}}
					></div>

					<div className="md:w-1/2 p-4 relative z-20 flex flex-col items-end justify-center gap-1">
						<div>
							<h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-3 text-left">
								O Chico <br />
								no Plantify+
							</h1>
							<p className="text-black mb-4 text-xs md:text-sm leading-snug text-left">
								No Plantify+, o nosso assistente <br />
								virtual Chico oferece um <br />
								suporte ainda mais avançado e <br />
								personalizado, interagindo de <br />
								forma mais profunda com as <br />
								funcionalidades avançadas da <br />
								plataforma. Isso inclui alertas <br />
								proativos e conselhos sobre <br />
								como melhorar a produtividade <br />e a saúde das plantas.
							</p>
							<button className="bg-orange-500 text-white py-2 px-5 rounded-lg font-bold transition duration-300 text-lg">
								Seja Plantify+
							</button>
						</div>
					</div>

					{/* Imagem do Chico */}
					<div className="md:w-1/2 p-4 relative z-20">
						<img
							src={chico}
							alt="Chico no Plantify+"
							className="w-1/2 h-auto relative z-20 "
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Plus
