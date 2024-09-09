import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout: FC = () => {
	return (
		<div className="min-h-screen bg-white pb-20 font-roboto">
			<Header />
			<div className="container">
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
