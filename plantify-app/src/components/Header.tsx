import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logos/Plantify+LOGO+corte.png'
import { FC } from 'react'
import { logout } from '../store/user/userSlice'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../store/hooks'
import { useAuth } from '../hooks/useAuth'
import { removeTokenFromLocalStorage } from '../helpers/localStorage.helper'

const Header: FC = () => {
	const isAuth = useAuth()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

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

				{/* Nav Links */}
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
								to="/plantify-plus"
								className="text-green-700 hover:text-orange-500"
							>
								Plantify+
							</Link>
						</li>
					</ul>
				</nav>

				{/* Actions */}
				{isAuth ? (
					<button className="btn btn-red" onClick={logoutHandler}>
						<span>Log Out</span>
					</button>
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
