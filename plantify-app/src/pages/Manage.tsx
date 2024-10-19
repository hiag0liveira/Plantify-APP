import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arrow from '../assets/manage/arrow.svg'
import bean from '../assets/manage/bean.svg'
import imagem1 from '../assets/manage/bgStart.png'
import down from '../assets/manage/bsgraphdownarrow.svg'
import up from '../assets/manage/bsgraphuparrow.svg'
import forum from '../assets/manage/forum-svg.svg'
import plantios from '../assets/manage/fundomeusplantios-svg.svg'
import money from '../assets/manage/money.png'
import potato from '../assets/manage/potato.svg'
import tempo from '../assets/manage/previsaodotempo.png'
import chico from '../assets/plantify+/chico.svg'
import Agenda from '../components/Agenda'
import BlogPosts from '../components/BlogPosts'
import MyPlantingsModal from '../components/MyPlantingsModal'

const Manage: FC = () => {
	const [visibleModal, setVisibleModal] = useState<boolean>(false)
	const navigate = useNavigate()

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
				</div>
				<div className="max-w-6xl mx-auto grid grid-cols-7 gap-4 mt-4">
					<div
						className="col-span-3 bg-white p-5 pb-10 rounded-lg shadow relative w-full bg-cover bg-center bg-no-repeat"
						style={{
							backgroundImage: `url(${plantios})`,
						}}
					>
						<div className="flex items-center justify-between">
							<h2 className="text-lg font-bold text-green-600">
								Meus plantios
							</h2>
							<span
								className="underline text-xs text-green-500 cursor-pointer hover:text-green-700"
								onClick={() => {
									setVisibleModal(true)
								}}
							>
								Acessar painel
							</span>
						</div>

						<ul className="mt-4 space-y-4">
							<li
								className="flex justify-between items-center shadow h-12 rounded-lg w-full p-4 cursor-pointer"
								onClick={() => navigate('/manage/bean')}
							>
								<div className="flex gap-2 items-center">
									<img className="h-4 w-4" src={bean} alt="bean" />
									Feijão
								</div>
								<div className="flex gap-4 items-center">
									<span className="text-gray-500 text-end">
										Última edição: <br></br> 21/10/24, 18:20
									</span>
									<img className="h-4 w-4" src={arrow} />
								</div>
							</li>

							<li
								className="flex justify-between items-center shadow h-12 rounded-lg w-full p-4 cursor-pointer"
								onClick={() => navigate('/manage/potato')}
							>
								<div className="flex gap-2 items-center">
									<img className="h-4 w-4" src={potato} alt="potato" />
									Batata
								</div>
								<div className="flex gap-4 items-center">
									<span className="text-gray-500 text-end">
										Última edição: <br></br> 05/09/24, 14:30
									</span>
									<img className="h-4 w-4" src={arrow} />
								</div>
							</li>
						</ul>
					</div>

					<div className="col-span-4 grid grid-cols-1 gap-4">
						<div
							className=" bg-white p-4 rounded-lg shadow flex items-center justify-between w-full bg-cover bg-center bg-no-repeat"
							style={{
								backgroundImage: `url(${forum})`,
							}}
						>
							<h2 className="text-3xl font-semibold mb-6 text-green-700">
								Fórum
							</h2>
							<div className="flex gap-2 mb-6 items-center">
								<p className="text-sm text-gray-500">🔥 7 novas postagens</p>
								<img className="h-4 w-4" src={arrow} />
							</div>
						</div>
						<Link to="/quermesse">
							<div
								className=" bg-white p-4 rounded-lg shadow flex items-center justify-between w-full bg-cover bg-center bg-no-repeat"
								style={{
									backgroundImage: `url(${plantios})`,
								}}
							>
								<h2 className="text-3xl font-bold mb-6 text-green-700">
									Quermesse
								</h2>
								<div className="flex gap-2 mb-6 items-center">
									<p className="text-sm text-end text-gray-500">
										🛒 3 novos produtos <br></br> cadastrados hoje
									</p>
									<img className="h-4 w-4" src={arrow} />
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>

			<div className="bg-white p-4 mt-10 ">
				<div className="max-w-6xl mx-auto shadow rounded-lg">
					<h1 className="text-start text-2xl font-bold ml-5 text-green-600">
						Minha Agenda de Outubro
					</h1>
					<Agenda />
				</div>
			</div>

			<div className="max-w-6xl mx-auto">
				<div className="grid grid-cols-2 gap-4 mt-4">
					<div className="w-full">
						<a
							href="https://www.climatempo.com.br/previsao-do-tempo/15-dias/cidade/4953/camposdosgoytacazes-rj"
							target="_blank"
						>
							<img src={tempo} alt="" />
						</a>
					</div>

					<div className="bg-white p-4 rounded-lg shadow">
						<div className="flex items-center justify-between">
							<h2 className="text-lg font-bold text-green-600">
								Fluxo de caixa geral
							</h2>
							<span className="underline text-xs text-green-500">
								Acessar painel
							</span>
						</div>
						<div className="grid grid-cols-2 items-center place-items-center">
							<div className="mt-4">
								<div className="flex items-center gap-2">
									<img
										src={down}
										alt="Ícone de Despesas"
										className="h-10 w-10"
									/>
									<p className="text-red-500 text-2xl font-light">R$3.853,89</p>
								</div>

								<div className="flex items-center gap-2 mt-5">
									<img src={up} alt="Ícone de Receitas" className="h-10 w-10" />
									<p className="text-green-500 text-2xl font-light">
										R$10.234,02
									</p>
								</div>
							</div>

							<div className=" flex  flex-col items-center space-x-2">
								<img src={money} alt="Ícone de lucro" className="h-20 w-20" />
								<p className="text-gray-500 mt-2">
									Situação de <span className="font-semibold">lucro</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-14 mb-24">
				<BlogPosts />
			</div>

			{visibleModal && <MyPlantingsModal setVisibleModal={setVisibleModal} />}
		</div>
	)
}
export default Manage
