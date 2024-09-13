import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout: FC = () => {
	return (
		<div className="min-h-screen bg-white pb-19 font-roboto">
			<Header />
			<div className="w-full">
				<Outlet />
			</div>
			<Footer />	
		</div>
	)
}

export default Layout
