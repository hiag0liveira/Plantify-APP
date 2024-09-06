import { Link } from 'react-router-dom'
import logo from '../assets/Plantify+LOGO+corte.png'

function Header() {
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

				{/* Buttons */}
				<div className="flex space-x-4 ml-6">
					<Link
						to="/signup"
						className="bg-green-700 text-white py-2 px-4 rounded hover:bg-orange-500"
					>
						Cadastre-se
					</Link>
					<Link
						to="/login"
						className="border border-green-700 text-green-700 py-2 px-4 rounded hover:bg-orange-500 hover:text-white hover:border-transparent"
					>
						Login
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
