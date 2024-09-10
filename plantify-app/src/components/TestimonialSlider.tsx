import { useState, useEffect } from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'

const testimonials = [
	{
		quote:
			'O site da Plantify me ajudou muito a ter praticidade no dia dia aqui na lavoura. Eu recomendo à todos os amigos, é muito bom!',
		name: 'José Santino',
	},
	{
		quote:
			'Negócio muito bom. Meu filho que me apresentou e afirmo que é de grande ajuda e vale muito apena!',
		name: 'Carlos Silva',
	},
	{
		quote:
			'É muito prático não ter que ficar anotando tudo no papel e conseguir acessar os dados facilidade e tranquilidade.',
		name: 'João Moura',
	},
]

const TestimonialSlider = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0)
	const [fade, setFade] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false) // começa a animação de saída

			setTimeout(() => {
				setCurrentTestimonial(
					(prevTestimonial) => (prevTestimonial + 1) % testimonials.length
				)
				setFade(true) // começa a animação de entrada
			}, 500) // espera meio segundo para trocar
		}, 5000) // Alterar a cada 5 segundos

		return () => clearInterval(interval)
	}, [])

	return (
		<div
			className={`transition-opacity max-w-2xl mt-20 duration-500 ease-in-out ${
				fade ? 'opacity-100' : 'opacity-0'
			}`}
		>
			{/* Texto ao lado das aspas */}
			<p className="text-2xl font-roboto text-gray-800 mb-4">
				{testimonials[currentTestimonial].quote}
			</p>
			<p className="text-lg font-semibold font-roboto italic text-right text-gray-600">
				- {testimonials[currentTestimonial].name}
			</p>
		</div>
	)
}

export default TestimonialSlider
