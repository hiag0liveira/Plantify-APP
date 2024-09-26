import { FC, useEffect, useState } from 'react'
import plantios from '../assets/manage/fundomeusplantios-svg.svg'
import arrow from '../assets/manage/arrow.svg'
import { useNavigate } from 'react-router-dom'

interface IMyPlantingsModal {
	setVisibleModal: (visible: boolean) => void
}

interface Plantio {
	name: string
	image: string
	lastEdited: string
	route: string
}

const ITEMS_PER_PAGE = 11

const MyPlantingsModal: FC<IMyPlantingsModal> = ({ setVisibleModal }) => {
	const [plantiosData, setPlantiosData] = useState<Plantio[]>([])
	const [currentPage, setCurrentPage] = useState(0)

	const navigate = useNavigate()

	useEffect(() => {
		fetch('/plantios.json')
			.then((response) => response.json())
			.then((data) => setPlantiosData(data))
			.catch((error) => console.error('Erro ao carregar o JSON:', error))

		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [])

	const startIndex = currentPage * ITEMS_PER_PAGE
	const endIndex = startIndex + ITEMS_PER_PAGE
	const currentItems = plantiosData.slice(startIndex, endIndex)

	const handleNextPage = () => {
		if ((currentPage + 1) * ITEMS_PER_PAGE < plantiosData.length) {
			setCurrentPage(currentPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1)
		}
	}

	const handleItemClick = (route: string) => {
		navigate(`/manage/${route}`)
	}

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 backdrop-blur-sm">
			<div
				className="bg-white max-w-5xl p-6 rounded-md shadow-lg relative w-full"
				style={{
					backgroundImage: `url(${plantios})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center 20px',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Modal Header */}
				<div className="flex justify-between items-center border-b pb-2">
					<h2 className="text-lg font-semibold text-green-700">
						Meus plantios
					</h2>
					<button
						className="text-gray-700 hover:text-red-700"
						onClick={() => setVisibleModal(false)}
					>
						X
					</button>
				</div>

				<div className="mt-4 grid grid-cols-2 gap-4">
					<ul className="space-y-4">
						{currentItems.slice(0, 6).map((plantio, index) => (
							<li
								key={index}
								className="flex justify-between items-center shadow h-12 cursor-pointer rounded-lg w-full p-4"
								onClick={() => handleItemClick(plantio.route)}
							>
								<div className="flex gap-2 items-center">
									<img
										className="h-4 w-4"
										src={plantio.image}
										alt={plantio.name}
									/>
									{plantio.name}
								</div>
								<div className="flex gap-4 items-center">
									<span className="text-gray-500 text-end">
										Última edição: <br /> {plantio.lastEdited}
									</span>
									<img className="h-4 w-4" src={arrow} />
								</div>
							</li>
						))}
					</ul>

					<ul className="space-y-4">
						{currentItems.slice(6, 11).map((plantio, index) => (
							<li
								key={index}
								className="flex justify-between items-center shadow h-12 rounded-lg w-full cursor-pointer p-4"
								onClick={() => handleItemClick(plantio.route)}
							>
								<div className="flex gap-2 items-center">
									<img
										className="h-4 w-4"
										src={plantio.image}
										alt={plantio.name}
									/>
									{plantio.name}
								</div>
								<div className="flex gap-4 items-center">
									<span className="text-gray-500 text-end">
										Última edição: <br /> {plantio.lastEdited}
									</span>
									<img className="h-4 w-4" src={arrow} />
								</div>
							</li>
						))}

						<li className="flex justify-center items-center shadow h-12 rounded-lg w-full p-4 bg-gray-200">
							<button className="text-xl text-green-700">+</button>
						</li>
					</ul>
				</div>

				<div className="mt-4 flex justify-between items-center">
					<button
						className={`px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 ${
							currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''
						}`}
						onClick={handlePrevPage}
						disabled={currentPage === 0}
					>
						Anterior
					</button>
					<button
						className={`px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 ${
							(currentPage + 1) * ITEMS_PER_PAGE >= plantiosData.length
								? 'opacity-50 cursor-not-allowed'
								: ''
						}`}
						onClick={handleNextPage}
						disabled={(currentPage + 1) * ITEMS_PER_PAGE >= plantiosData.length}
					>
						Próxima
					</button>
				</div>
			</div>
		</div>
	)
}

export default MyPlantingsModal
