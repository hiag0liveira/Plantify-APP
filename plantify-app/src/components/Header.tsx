import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logos/Plantify+LOGO+corte.png'
import imgPerf from '../assets/perf.jpg'
import { FC, useState } from 'react'
import { logout } from '../store/user/userSlice'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../store/hooks'
import { useAuth } from '../hooks/useAuth'
import { removeTokenFromLocalStorage } from '../helpers/localStorage.helper'
import { IoIosArrowDown, IoIosPeople, IoMdClose } from 'react-icons/io'
import { FaHandHoldingUsd, FaPlus } from 'react-icons/fa'
import { PiMedal, PiPlant } from 'react-icons/pi'
import { GrCart } from 'react-icons/gr'
import { IoHomeOutline } from 'react-icons/io5'
import { BiSolidLockAlt } from 'react-icons/bi'

const Header: FC = () => {
	const isAuth = useAuth()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const [isDropdownOpen, setDropdownOpen] = useState(false)

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen)
	}

	const handleLoginClick = () => {
		navigate('login')
	}

	const handleSignInClick = () => {
		navigate('signin')
	}
	const logoutHandler = () => {
		dispatch(logout())
		removeTokenFromLocalStorage('token')
		toast.success('You have successfully logged out')
		navigate('/')
	}
	return (
		<header className="bg-white border-b-2 border-gray-200 p-4">
			<div className=" flex items-center container mx-auto max-w-7xl">
				{/* Logo */}
				<Link to="/" className="flex-shrink-0">
					<img
						src={logo}
						alt="Plantify Logo"
						style={{ width: '200px', height: 'auto' }}
					/>
				</Link>

				{isAuth ? (
					<div className="relative space-x-6 ml-auto -mb-20 mr-3 z-30">
						{!isDropdownOpen && (
							<div className="rounded-b-full bg-white p-2">
								<IoIosArrowDown
									className="cursor-pointer text-xl relative -bottom-2 text-gray-700"
									onClick={toggleDropdown}
								/>
							</div>
						)}
						{isDropdownOpen && (
							<div className="absolute -left-24 w-48 text-center bg-white shadow-lg rounded-lg z-20">
								<ul className="text-gray-700">
									<Link to="/manage">
										<li
											className="flex items-start justify-center mt-1 gap-2 py-2 hover:bg-gray-100 cursor-pointer"
											onClick={toggleDropdown}
										>
											<FaHandHoldingUsd />
											<span>Minha gestão</span>
										</li>
									</Link>

									<li className="flex items-start justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg cursor-not-allowed ">
										<div className="blur-[1px] flex items-start justify-center gap-2">
											<PiMedal />
											Time de especialistas
										</div>
										<BiSolidLockAlt className="absolute text-lg" />
									</li>
									<li className="flex items-start justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg cursor-not-allowed">
										<div className="blur-[1px] flex items-start justify-center gap-2">
											<GrCart />
											Venda na Quermesse
										</div>
										<BiSolidLockAlt className="absolute text-lg" />
									</li>
									<li className="flex items-start justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg cursor-not-allowed">
										<div className="blur-[1px] flex items-start justify-center gap-2">
											<IoIosPeople />
											Clube de benefícios
										</div>
										<BiSolidLockAlt className="absolute text-lg" />
									</li>
									<Link to="/">
										<li
											className="flex items-start justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
											onClick={toggleDropdown}
										>
											<IoHomeOutline />
											Home Page
										</li>
									</Link>
									<Link to="/plus">
										<li
											className="flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
											onClick={toggleDropdown}
										>
											<FaPlus />
											Plantify Plus
										</li>
									</Link>
									<Link to="/about">
										<li className="flex items-center justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
											<PiPlant />
											Sobre nós
										</li>
									</Link>
									<li
										className="flex items-start justify-center gap-2 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
										onClick={toggleDropdown}
									>
										<IoMdClose size={18} />
									</li>
								</ul>
							</div>
						)}
					</div>
				) : (
					<nav className="flex text-[20px] space-x-6 ml-auto mr-3">
						<ul className="flex space-x-6">
							<li>
								<Link to="/" className="text-green-700 hover:text-orange-500">
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/about"
									className="text-green-700 hover:text-orange-500"
								>
									Quem somos
								</Link>
							</li>
							<li>
								<Link
									to="/plus"
									className="text-green-700 hover:text-orange-500"
								>
									Plantify+
								</Link>
							</li>
						</ul>
					</nav>
				)}

				{isAuth ? (
					<div className="flex text-[20px] space-x-6 ml-auto mr-3">
						<div className="flex items-center space-x-3">
							<div className="flex items-end ">
								<div className="flex flex-col items-end gap-1 mr-3">
									<span className="text-green-600 font-bold">Carlos Silva</span>
									<button
										className="text-base text-green-700 hover:text-orange-700  transform hover:scale-105 hover:font-semibold"
										onClick={logoutHandler}
									>
										Sair
									</button>
								</div>
								<img
									src={imgPerf}
									alt="Carlos Silva"
									className="w-14 h-14 rounded-full"
								/>
							</div>
						</div>
					</div>
				) : (
					/* Buttons */
					<div className="flex space-x-4 ml-6">
						<button
							className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-orange-500"
							onClick={handleSignInClick}
						>
							Cadastre-se
						</button>
						<button
							className="border border-green-700 text-green-700 py-2 px-4 rounded-md hover:bg-orange-500 hover:text-white hover:border-transparent"
							onClick={handleLoginClick}
						>
							Login
						</button>
					</div>
				)}
			</div>
		</header>
	)
}

export default Header
