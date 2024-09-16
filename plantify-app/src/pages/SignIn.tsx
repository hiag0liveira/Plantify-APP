import { useState } from 'react'
import fundoLogin from '../assets/login/fundologin.png'
import platifyLogo from '../assets/logos/Plantify LOGO corte-svg.svg'
import plantifyLogoP from '../assets/logos/Plantify SIMBOLO copy-svg.svg'

function SignIn() {
	const [nome, setNome] = useState('')
	const [cpfCnpj, setcpfCnpj] = useState('')
	const [email, setEmail] = useState('')
	const [confirmEmail, setConfirmEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [confirmSenha, setConfirmSenha] = useState('')

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
	}

	return (
		<div
			className="relative w-full h-screen grid grid-cols-1 md:grid-cols-2"
			style={{
				backgroundImage: `url(${fundoLogin})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Coluna da esquerda (Logo P centralizado) */}
			<div className="hidden md:flex justify-center items-center">
				<img src={plantifyLogoP} alt="Logo" />
			</div>

			{/* Coluna da direita (Formulário centralizado) */}
			<div className="flex justify-center items-center px-4 py-6">
				<div className="bg-white bg-opacity-70 p-6 md:p-4 rounded-lg shadow-lg w-full max-w-md">
					<div className="text-2xl md:text-4xl font-bold text-green-700 text-center mb-4">
						<img
							src={platifyLogo}
							alt="Logo"
							className="w-24 md:w-36 mx-auto"
						/>
					</div>
					<form onSubmit={handleSubmit} className="space-y-3">
						<div className="mb-4">
							<label className="block text-xs font-medium text-gray-700">
								<b>Nome</b>
							</label>
							<input
								type="text"
								value={nome}
								onChange={(e) => setNome(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
								placeholder="Informe seu nome completo"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-xs  font-medium text-gray-700">
								<b>CPF ou CNPJ</b>
							</label>
							<input
								type="number"
								value={cpfCnpj}
								onChange={(e) => setcpfCnpj(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
								placeholder="Informe apenas numeros"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-xs  font-medium text-gray-700">
								<b>E-mail</b>
							</label>
							<input
								type="text"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
								placeholder="Informe seu e-mail"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-xs  font-medium text-gray-700">
								<b>Confirme seu E-mail</b>
							</label>
							<input
								type="email"
								value={confirmEmail}
								onChange={(e) => setConfirmEmail(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
								placeholder="Confirme seu e-mail"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-xs  font-medium text-gray-700">
								<b>Senha</b>
							</label>
							<input
								type="password"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
								placeholder="Informe sua senha"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-xs  font-medium text-gray-700">
								<b>Confirme sua Senha</b>
							</label>
							<input
								type="password"
								value={confirmSenha}
								onChange={(e) => setConfirmSenha(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
								placeholder="Confirme sua senha"
							/>
						</div>

						{/* Botões */}
						<div className="text-center mt-4">
							<button className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
								Criar Conta
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignIn
