import { useState } from 'react'
import fundoLogin from '../assets/login/fundologin.png'
import platifyLogo from '../assets/logos/Plantify LOGO corte-svg.svg'
import plantifyLogoP from '../assets/logos/Plantify SIMBOLO copy-svg.svg'
import { AuthService } from '../services/auth.service'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function SignIn() {
	const [nome, setNome] = useState('')
	const [cpfCnpj, setcpfCnpj] = useState('')
	const [email, setEmail] = useState('')
	const [confirmEmail, setConfirmEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [confirmSenha, setConfirmSenha] = useState('')
	const navigate = useNavigate()

	const registrationHandler = async () => {
		try {
			const data = await AuthService.registration()
			if (data) {
				toast.success('Conta criada com sucesso!.')
				navigate('/login')
			}
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (email !== confirmEmail) {
			toast.error('Os e-mails não coincidem.')
			return
		}

		if (senha !== confirmSenha) {
			toast.error('As senhas não coincidem.')
			return
		}

		registrationHandler()
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
			<div className="hidden md:flex justify-center items-center">
				<img src={plantifyLogoP} alt="Logo" />
			</div>

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

						<div className="text-center mt-4">
							<button className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 hover:bg-orange-500">
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
