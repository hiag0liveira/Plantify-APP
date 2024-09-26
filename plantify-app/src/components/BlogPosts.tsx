import { FC } from 'react'
import noticia1 from '../assets/noticias/RioParaiba.jpg'
import noticia2 from '../assets/noticias/horta.jpg'
import noticia3 from '../assets/noticias/plantio.jpg'
import noticia4 from '../assets/noticias/cana.jpg'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

const BlogPosts: FC = () => {
	return (
		<div className=" mx-auto max-w-6xl">
			<h2 className="text-3xl font-bold text-green-700 mb-8">
				Últimas postagens no blog
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div className="w-full">
					<img
						src={noticia1}
						alt="Rio Paraíba do Sul"
						className="rounded-lg mb-4"
					/>
					<h3 className="text-xl font-bold flex items-center gap-2">
						Rio Paraíba do Sul <IoIosArrowForward />
					</h3>
					<p className="text-lg font-roboto leading-none">
						Entenda como a qualidade da água afeta seu plantio
					</p>
				</div>
				<div className="w-full">
					<img
						src={noticia2}
						alt="Horta comunitária"
						className="rounded-lg mb-4 "
					/>
					<h3 className="text-xl font-bold flex items-center gap-2">
						Horta comunitária <IoIosArrowForward />
					</h3>
					<p className="text-lg font-roboto leading-none">
						Colaborar com a comunidade faz bem para seu negócio
					</p>
				</div>
				<div className="w-full">
					<img
						src={noticia3}
						alt="Escolha de sementes"
						className="rounded-lg mb-4"
					/>
					<h3 className="text-xl font-bold flex items-center gap-2">
						Escolha de sementes <IoIosArrowForward />
					</h3>
					<p className="text-lg font-roboto leading-none">
						Saiba o que levar em consideração nas compras
					</p>
				</div>
				<div className="w-full">
					<img
						src={noticia4}
						alt="Broca da cana-de-açúcar"
						className="rounded-lg mb-4 "
					/>
					<h3 className="text-xl font-bold flex items-center gap-2">
						Broca da cana-de-açúcar <IoIosArrowForward />
					</h3>
					<p className="text-lg font-roboto leading-none">
						Um pequeno contribuidor para um prejuízo de milhões
					</p>
				</div>
			</div>
			<div className="mt-6 flex justify-end">
				<Link to="/posts">
					<p className="text-sm font-roboto leading-none flex italic text-gray-600  gap-2 text-right">
						Leia mais
						<IoIosArrowForward />
					</p>
				</Link>
			</div>
		</div>
	)
}

export default BlogPosts
