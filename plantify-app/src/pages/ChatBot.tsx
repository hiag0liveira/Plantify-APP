import { FC, useState } from 'react'
import axios from 'axios'
import imgPerf from '../assets/perf.jpg'
import ilustration from '../assets/chatbot/ilustra.svg'
import chico from '../assets/plantify+/chico.svg'
import { BsArrowUpCircleFill, BsThreeDots } from 'react-icons/bs'

const ChatBot: FC = () => {
	const [messages, setMessages] = useState<{ role: string; content: string }[]>(
		[
			{
				role: 'assistant',
				content:
					'Olá! Eu sou o Chico, seu assistente virtual da Plantify! Como posso ajudar hoje?',
			},
		]
	)
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const sendMessage = async () => {
		if (input.trim() === '') return

		const userMessage = { role: 'user', content: input }

		setMessages((prevMessages) => [...prevMessages, userMessage])
		setInput('')

		setLoading(true)
		setError(null)

		try {
			await new Promise((resolve) => setTimeout(resolve, 1000))

			const response = await axios.post(
				'https://api.openai.com/v1/chat/completions',
				{
					model: 'gpt-3.5-turbo',
					messages: [
						{
							role: 'system',
							content: `Seu nome é Chico, o assistente virtual da Plantify. Sempre responda em português. Use trocadilhos com moderação (0-2 por resposta). Dê recomendações de adubos e técnicas agrícolas quando perguntado sobre solo.`,
						},
						...messages,
						userMessage,
					],
				},
				{
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
						'Content-Type': 'application/json',
					},
				}
			)

			const assistantMessage = response.data.choices[0].message
			setMessages((prevMessages) => [...prevMessages, assistantMessage])
		} catch (error: any) {
			console.error('Erro ao se comunicar com a API:', error)
			if (error.response && error.response.status === 429) {
				setError(
					'Estamos recebendo muitas solicitações agora. Por favor, aguarde alguns instantes antes de tentar novamente.'
				)
			} else {
				setError(
					'Desculpe, algo deu errado ao tentar responder sua pergunta. Tente novamente mais tarde!'
				)
			}
			setMessages((prevMessages) => [
				...prevMessages,
				{
					role: 'assistant',
					content: error.message || 'Erro ao processar a solicitação',
				},
			])
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="grid grid-cols-6 h-screen -mb-11 bg-green-700">
			<div className="col-span-2 bg-green-900 h-4/5 p-6 text-white flex flex-col justify-between">
				<div>
					<div className="flex justify-between">
						<h2 className="font-bold text-xl">Histórico</h2>
						<BsThreeDots size={30} />
					</div>

					<hr />
					<div className="mb-4 mt-8">
						<p className="font-semibold">Ontem</p>
						<p>Melhor pesticida caseiro</p>
					</div>

					<div className="mb-4">
						<p className="font-semibold">18/10/24</p>
						<p>Plantar cenoura e batata junto é bom?</p>
						<p>Boa tarde chico</p>
					</div>

					<div>
						<p className="font-semibold">14/10/24</p>
						<p>Oi chico bom dia</p>
						<p>Chico como posso vender melancia sem estragar</p>
					</div>
				</div>

				<div className="flex justify-center mt-4">
					<img src={ilustration} alt="Ilustração" className="w-full" />
				</div>
			</div>

			<div className="col-span-4 bg-green-800 h-4/5 flex flex-col justify-between items-center">
				<div className="h-screen overflow-y-scroll w-full p-4">
					{messages.map((message, index) => (
						<div
							key={index}
							className={`flex items-start my-2 ${
								message.role === 'user' ? 'justify-end' : 'justify-start'
							}`}
						>
							{message.role === 'assistant' ? (
								<>
									<div className="flex-shrink-0 rounded-full bg-white border border-green-500">
										<img
											className="h-16 w-16 object-cover"
											style={{
												objectPosition: '100% -43%',
												borderTopLeftRadius: '50%',
												borderBottomLeftRadius: '50%',
												borderBottomRightRadius: '0%',
											}}
											src={chico}
											alt="Avatar"
										/>
									</div>
									{/* Balão de fala personalizado */}
									<div className="relative ml-8 bg-white p-4 rounded-xl max-w-xs shadow-lg">
										{message.content}
										<div
											style={{
												position: 'absolute',
												left: '-10px',
												top: '15px',
												width: '0',
												height: '0',
												borderStyle: 'solid',
												borderWidth: '10px 10px 10px 0',
												borderColor:
													'transparent white transparent transparent',
											}}
										/>
									</div>
								</>
							) : (
								<>
									<div className="relative mr-8 bg-white p-4 rounded-xl max-w-xs shadow-lg">
										{message.content}
										<div
											style={{
												position: 'absolute',
												right: '-10px',
												top: '15px',
												width: '0',
												height: '0',
												borderStyle: 'solid',
												borderWidth: '10px 0 10px 10px',
												borderColor:
													'transparent transparent transparent white',
											}}
										/>
									</div>
									<img
										src={imgPerf}
										alt="Carlos Silva"
										className="w-16 h-16 rounded-full ml-2"
									/>
								</>
							)}
						</div>
					))}

					{/* Exibir "Chico está pensando..." enquanto estiver carregando */}
					{loading && (
						<div className="flex items-start my-2 justify-start">
							<div className="flex-shrink-0 rounded-full bg-white border border-green-500">
								<img
									className="h-16 w-16 object-cover"
									style={{
										objectPosition: '100% -43%',
										borderTopLeftRadius: '50%',
										borderBottomLeftRadius: '50%',
										borderBottomRightRadius: '0%',
									}}
									src={chico}
									alt="Avatar"
								/>
							</div>
							<div className="relative ml-8 bg-white p-4 rounded-xl max-w-xs shadow-lg">
								Chico está pensando...
								<div
									style={{
										position: 'absolute',
										left: '-10px',
										top: '15px',
										width: '0',
										height: '0',
										borderStyle: 'solid',
										borderWidth: '10px 10px 10px 0',
										borderColor: 'transparent white transparent transparent',
									}}
								/>
							</div>
						</div>
					)}
				</div>

				{error && <div className="text-red-500 text-sm mb-4">{error}</div>}

				<div className="flex items-center space-x-2 w-3/4 p-1.5 mb-10 bg-white rounded-2xl shadow-lg">
					{/* Campo de entrada de texto */}
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="flex-grow p-4 text-gray-600 bg-transparent border-none outline-none focus:ring-0"
						placeholder="Digite aqui e aperte a tecla 'enter' para enviar ou clique no botão ao lado"
						disabled={loading}
					/>

					{/* Botão de envio com ícone */}
					<button
						onClick={sendMessage}
						className="flex items-center p-4 justify-center"
						disabled={loading}
					>
						<BsArrowUpCircleFill className="text-gray-400" size={28} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChatBot
