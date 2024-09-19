import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Auth from '../pages/Auth'
import LoginPage from '../pages/Login'
import SignIn from '../pages/SignIn'
import Plus from '../pages/Plus'
import ChatBot from '../pages/ChatBot'

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
				path: 'plus',
				element: <Plus />,
			},
			{
				path: 'chatbot',
				element: <ChatBot />,
			},
		],
	},
])
