import { RouteProps } from 'react-router-dom';
import Main from 'pages/Main';
import Login from 'pages/Login';
import Browse from 'pages/Browse';

enum Routes {
	MAIN = 'main',
	LOGIN = 'login',
	BROWSE = 'browse',
}

const RouterPaths: Record<Routes, string> = {
	[Routes.MAIN]: '/',
	[Routes.LOGIN]: '/login',
	[Routes.BROWSE]: '/browse',
};

export const RoutesRU: Record<string, string> = {
	[RouterPaths.main]: 'Главная',
	[RouterPaths.login]: 'Авторизация',
	[RouterPaths.browse]: 'Просмотр',
};

export const RouterConfig: Record<Routes, RouteProps> = {
	[Routes.MAIN]: {
		element: <Main />,
		path: RouterPaths.main,
	},
	[Routes.LOGIN]: {
		element: <Login />,
		path: RouterPaths.login,
	},
	[Routes.BROWSE]: {
		element: <Browse />,
		path: RouterPaths.browse,
	},
};
