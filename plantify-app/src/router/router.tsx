import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Auth from '../pages/Auth'
import LoginPage from '../pages/Login'
import SignIn from '../pages/SignIn'
import Plus from '../pages/Plus'
import ChatBot from '../pages/ChatBot'
import Manage from '../pages/Manage'
import PlantingPage from '../pages/PlantingPage'
import About from '../pages/About'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'auth',
				element: <Auth />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'signin',
				element: <SignIn />,
			},
			{
				path: 'about',
				element: <About />,
			},
			{
				path: 'plus',
				element: <Plus />,
			},
			{
				path: 'chatbot',
				element: <ChatBot />,
			},
			{
				path: 'manage',
				element: <Manage />,
			},
			{
				path: 'manage/:planting',
				element: <PlantingPage />,
			},
		],
	},
])
