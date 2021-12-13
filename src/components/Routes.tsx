import React, { useContext } from "react"
import { Redirect } from "react-router"
import { renderRoutes } from "react-router-config"

import { ROUTES } from "../constants"
import { SessionContext } from "./SessionProvider"
import LoginPage from "../pages/Login"
import AuthCallbackPage from "../pages/AuthCallbackPage"
import SearchPage from "../pages/Search"
import FavoritesPage from "../pages/Favorites"

const publicRoutes = [
	{
		component: LoginPage,
		exact: true,
		path: ROUTES.LOG_IN,
	},
	{
		component: AuthCallbackPage,
		exact: true,
		path: ROUTES.AUTH,
	},
	{
		component: (): JSX.Element => <Redirect to="/login" />,
		path: "*",
	},
]

const privateRoutes = [
	{
		component: SearchPage,
		exact: true,
		path: ROUTES.SEARCH,
	},
	{
		component: FavoritesPage,
		exact: true,
		path: ROUTES.FAVORITES,
	},
	{
		component: (): JSX.Element => <Redirect to="/search" />,
		path: "*",
	},
]

const Routes: React.FC = () => {
	const { isLoggedIn } = useContext(SessionContext)
	const routes = isLoggedIn ? privateRoutes : publicRoutes
	return renderRoutes(routes)
}

export default Routes
