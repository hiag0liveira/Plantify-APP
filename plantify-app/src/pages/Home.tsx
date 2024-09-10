import { FC } from 'react'
import imagem1 from '../assets/home/fundoprincipalhome.png'

const Home: FC = () => {
	return (
		<div>
			<div
				className="relative w-screen h-screen bg-cover bg-center"
				style={{
					backgroundImage: `url(${imagem1})`,
				}}
			>
				{/* Texto e botão sobrepostos */}
				<div
					className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 "
					style={{
						marginTop: '20%',
					}}
				>
					<h4 className="text-white text-4xl md:text-5xl font-light leading-tight">
						SUA LAVOURA <span className="font-bold italic">DIGITAL</span>
						<br />
						SUA GESTÃO <span className="font-bold italic">FACILITADA</span>
					</h4>
					<button className="mt-6 px-6 py-2 bg-orange-500 text-white text-lg rounded-md hover:bg-orange-600 transition duration-300">
						Saiba mais
					</button>
				</div>
			</div>

			<div>
				<h1>sec2</h1>
			</div>
		</div>
	)
}

export default Home
