import { FC, useState } from 'react'
import Footer from '../components/Footer'
import HeaderQuermesse from '../components/HeaderQuermesse'
import bg from '../assets/quermesse/bgquermesse.png'
import quermessesData from '../../public/quermesse.json'
import user from '../assets/quermesse/usuario.svg'
import favorite from '../assets/quermesse/salvar.svg'
import addcart from '../assets/quermesse/addcarrinho.svg'
import coment from '../assets/quermesse/comentar.svg'
import search from '../assets/quermesse/search.svg'
import {
	MdKeyboardDoubleArrowRight,
	MdKeyboardDoubleArrowLeft,
	MdKeyboardArrowRight,
	MdKeyboardArrowLeft,
} from 'react-icons/md'

const ItemsPerPage = 9

const Quermesse: FC = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [searchTerm, setSearchTerm] = useState('')

	const filteredItems = quermessesData.filter((item) =>
		item.Nome.toLowerCase().includes(searchTerm.toLowerCase())
	)

	const indexOfLastItem = currentPage * ItemsPerPage
	const indexOfFirstItem = indexOfLastItem - ItemsPerPage
	const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

	const totalPages = Math.ceil(filteredItems.length / ItemsPerPage)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
	return (
		<div>
			<HeaderQuermesse />
			<div
				className="relative -mt-1 w-full bg-cover bg-no-repeat"
				style={{
					backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)85%),url(${bg})`,
				}}
			>
				<div
					style={{
						paddingBottom: '30rem',
					}}
				></div>
			</div>
			<div className="mb-36 max-w-2xl -mt-96 mx-auto relative">
				<input
					type="text"
					placeholder="Pesquisar um produto..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="shadow border-gray-200 p-2 w-full rounded-lg pl-10"
				/>
				<img
					src={search}
					alt="search"
					className="absolute left-3 top-3 w-6 h-6"
				/>
			</div>
			<div className="grid grid-cols-3 gap-x-16 gap-y-12 max-w-5xl mx-auto relative">
				{currentItems.length > 0 ? (
					currentItems.map((item, index) => (
						<div key={index} className=" bg-white rounded-2xl shadow">
							<h2 className=" flex justify-center p-2 text-lg font-semibold items-center text-green-600">
								{item.Nome}
							</h2>
							<img
								src={item.img}
								alt={item.Nome}
								className="w-full h-60 object-cover mb-4"
							/>
							<div className="flex gap-8 justify-center mb-4">
								<img src={addcart} alt="addcart" />
								<img src={user} alt="user" />
								<img src={coment} alt="coment" />
								<img src={favorite} alt="favorite" />
							</div>
						</div>
					))
				) : (
					<p className="text-center col-span-3">Nenhum item encontrado</p>
				)}
			</div>
			{totalPages > 1 && (
				<div className="flex justify-center  mt-16 mb-16">
					<nav>
						<ul className="flex items-center list-none">
							<li className="mx-1">
								<button
									onClick={() => paginate(1)}
									disabled={currentPage === 1}
									className={`px-4 py-2 hover:bg-orange-400 hover:text-white rounded ${
										currentPage === 1 ? 'bg-gray-200' : 'bg-gray-300'
									}`}
								>
									<MdKeyboardDoubleArrowLeft />
								</button>
							</li>

							<li className="mx-1">
								<button
									onClick={() => paginate(currentPage - 1)}
									disabled={currentPage === 1}
									className={`px-4 py-2  hover:bg-orange-400 hover:text-white rounded ${
										currentPage === 1 ? 'bg-gray-200' : 'bg-gray-300'
									}`}
								>
									<MdKeyboardArrowLeft />
								</button>
							</li>

							{[...Array(totalPages)]
								.map((_, i) => i + 1)
								.filter(
									(pageNumber) =>
										pageNumber === currentPage ||
										pageNumber === currentPage - 1 ||
										pageNumber === currentPage + 1
								)
								.map((pageNumber) => (
									<li key={pageNumber} className="mx-1">
										<button
											onClick={() => paginate(pageNumber)}
											className={`px-4 py-2 rounded ${
												currentPage === pageNumber
													? 'bg-green-500 text-white'
													: 'bg-gray-200'
											}`}
										>
											{pageNumber}
										</button>
									</li>
								))}

							<li className="mx-1">
								<button
									onClick={() => paginate(currentPage + 1)}
									disabled={currentPage === totalPages}
									className={`px-4 py-2 hover:bg-orange-400 hover:text-white rounded ${
										currentPage === totalPages ? 'bg-gray-200' : 'bg-gray-300'
									}`}
								>
									<MdKeyboardArrowRight />
								</button>
							</li>

							<li className="mx-1">
								<button
									onClick={() => paginate(totalPages)}
									disabled={currentPage === totalPages}
									className={`px-4 py-2  hover:bg-orange-400 hover:text-white rounded ${
										currentPage === totalPages ? 'bg-gray-200' : 'bg-gray-300'
									}`}
								>
									<MdKeyboardDoubleArrowRight />
								</button>
							</li>
						</ul>
					</nav>
				</div>
			)}

			<Footer />
		</div>
	)
}

export default Quermesse
