import { useState } from 'react'
import fundoLogin from '../assets/login/fundologin.png'
import platifyLogo from '../assets/logos/Plantify LOGO corte-svg.svg'
import plantifyLogoP from '../assets/logos/Plantify SIMBOLO copy-svg.svg'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../store/hooks'
import { AuthService } from '../services/auth.service'
import { setTokenToLocalStorage } from '../helpers/localStorage.helper'
import { login } from '../store/user/userSlice'
import { toast } from 'react-toastify'

function LoginPage() {
	const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')
	const [emailError, setEmailError] = useState('')
	const [senhaError, setSenhaError] = useState('')
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleClick = () => {
		navigate('/signin')
	}

	const loginHandler = async () => {
		try {
			const data = await AuthService.login()
			if (data) {
				setTokenToLocalStorage('token', data.token)
				dispatch(login(data))
				toast.success('You logged id.')
				navigate('/manage')
				window.location.reload()
			}
		} catch (err: any) {
			const error = err.response?.data.message
			toast.error(error.toString())
		}
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		let hasError = false

		if (email === '') {
			setEmailError('O e-mail é obrigatório.')
			toast.error('O e-mail é obrigatório.')
			hasError = true
		} else {
			setEmailError('')
		}

		if (senha === '') {
			setSenhaError('A senha é obrigatória.')
			toast.error('A senha é obrigatória.')
			hasError = true
		} else {
			setSenhaError('')
		}

		if (!hasError) {
			loginHandler()
		}
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
				<img src={plantifyLogoP} alt="Logo" className="w-80" />
			</div>

			<div className="flex justify-center items-center px-4 py-6">
				<div className="bg-white bg-opacity-70 p-6 md:p-8 rounded-lg shadow-lg w-full max-w-xl">
					<div className="flex text-2xl md:text-4xl justify-center text-green-700 text-center mb-6">
						<img src={platifyLogo} alt="Logo" className="w-48 md:w-64" />
					</div>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								<b>E-mail</b>
							</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
								placeholder="Informe seu e-mail"
							/>
							{emailError && (
								<p className="text-red-500 text-sm mt-1">{emailError}</p>
							)}
						</div>

						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700">
								<b>Senha</b>
							</label>
							<input
								type="password"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
								placeholder="Informe sua senha"
							/>
							{senhaError && (
								<p className="text-red-500 text-sm mt-1">{senhaError}</p>
							)}
						</div>

						<div className="text-right mb-6">
							<a href="#" className="text-sm text-green-600 hover:underline">
								Esqueci minha senha
							</a>
						</div>

						<div>
							<button
								type="submit"
								className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
							>
								Entrar
							</button>
						</div>
						<div className="text-center mt-4">
							<button
								onClick={handleClick}
								className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 "
							>
								Cadastre-se
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
