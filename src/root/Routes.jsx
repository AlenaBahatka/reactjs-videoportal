import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import Footer from '../common-components/footer/Footer';
import NotFoundPage from '../common-components/not-found/NotFoundPage';
import * as actions from '../+state/actions/actions';

const loading = ({ isLoading, pastDelay, error }) => {
	if (isLoading && pastDelay) {
		return <p>Loading...</p>;
	} else if (error && !isLoading) {
		return <p>Error!</p>;
	} else {
		return null;
	}
};

const SearchPage = Loadable({
	loader: () => import('../search-page/SearchPage'),
	loading
});

const FilmPage = Loadable({
	loader: () => import('../film-page/FilmPage'),
	loading
});

const searchPageLoadData = function loadData(store, path) {
	let pathParts = path.split('/');
	const searchQuery = pathParts.pop() || pathParts.pop();
	if (!searchQuery) {
		return Promise.resolve();
	}

	const filterOption = store.getState().filmsReducer.filterOptions.defaultChecked;
	return store.dispatch(actions.fetchFilms(searchQuery, filterOption));
};

const filmPageLoadData = function(store, path) {
	let pathParts = path.split('/');
	const filmId = pathParts.pop() || pathParts.pop();

	if (!filmId || typeof filmId != 'number') {
		return Promise.resolve();
	}
	return store.dispatch(actions.getFilmWithSimilar(filmId));
};

const routes = [
	{
		path: '/',
		component: SearchPage,
		exact: true,
		loadData: searchPageLoadData
	},
	{
		path: '/search/:query',
		component: SearchPage,
		loadData: searchPageLoadData
	},
	{
		path: '/film/:filmId',
		component: FilmPage,
		loadData: filmPageLoadData
	}
];

const renderRoute = (route) => {
	let { path, component } = route;
	return route.exact ? (
		<Route key={path} exact path={path} component={component} />
	) : (
		<Route key={path} path={path} component={component} />
	);
};

const Root = () => (
	<React.Fragment>
		<Switch>
			{routes.map((route) => {
				return renderRoute(route);
			})}
			<Route component={NotFoundPage} />
		</Switch>
		<Footer />
	</React.Fragment>
);

export { routes };
export default Root;
