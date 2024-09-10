import { FC } from 'react'
import logo from '../assets/logos/Plantify LOGO white.svg'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoWhatsapp } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'

const Footer: FC = () => {
	return (
		<footer className="bg-green-700 text-white py-6">
			<div className="container mx-auto flex justify-between items-start max-w-7xl">
				{/* Seção de informações */}
				<div className="text-left mb-5">
					<img
						src={logo}
						alt="Plantify Logo"
						style={{ width: '200px', height: 'auto' }}
						className="mb-4"
					/>
					<div className="flex space-x-4">
						<a href="#" className="hover:underline">
							Termos de Uso
						</a>
						<a href="#" className="hover:underline">
							Política de Privacidade
						</a>
					</div>
					<p className="text-sm">
						2024 © Plantify - Software de Gestão Agrícola
					</p>
					<p className="text-sm">Todos os direitos reservados</p>
				</div>

				{/* Seção de contato */}
				<div className="text-right">
					<p>Fale com a gente:</p>
					<div className="flex justify-end space-x-2 my-1">
						<AiOutlineInstagram size={30} className="hover:text-gray-300" />
						<BiLogoWhatsapp size={30} className="hover:text-gray-300" />
						<HiOutlineMail size={30} className="hover:text-gray-300" />
					</div>
					<div className="text-sm">
						<p>Canais de atendimento:</p>
						<p>0800 002 9323</p>
						<p>(22) 2734-0591</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
