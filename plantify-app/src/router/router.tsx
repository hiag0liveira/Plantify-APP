import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import Auth from '../pages/Auth'
import LoginPage from '../pages/Login'
import SignIn from '../pages/SignIn'

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
		],
	},
	{
		path: '/login',
		element: <LoginPage />,
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
		],
	},
	{
		path: '/signin',
		element: <SignIn />,
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
		],
	},
])
