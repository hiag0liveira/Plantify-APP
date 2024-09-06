import { FC } from 'react'
import img from '../assets/page_not_found.png.png'
import { Link } from 'react-router-dom'

const ErrorPage: FC = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-10 white font-roboto text-white">
			<img src={img} alt="img" className="w-80" />
			<Link
				to={'/'}
				className="rounded-md bg-green-700 px-6 py-2 hover:bg-orange-500"
			>
				Back
			</Link>
		</div>
	)
}

export default ErrorPage
