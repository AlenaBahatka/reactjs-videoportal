import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import ErrorBoundary from '../common-components/error-boundary/ErrorBoundary';
import FilmPage from '../film-page/FilmPage';
import Footer from '../common-components/footer/Footer';
import SearchPage from '../search-page/SearchPage';
import NotFoundPage from '../common-components/not-found/NotFoundPage';

const Root = ({ store, persistor }) => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ErrorBoundary>
				<Router>
					<Switch>
						<Route exact path="/" component={SearchPage} />
						<Route path="/search/:query" component={SearchPage} />
						<Route path="/film/:filmId" component={FilmPage} />
						<Route component={NotFoundPage} />
					</Switch>
					<Footer />
				</Router>
			</ErrorBoundary>
		</PersistGate>
	</Provider>
);

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;
