import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ErrorBoundary from '../common-components/error-boundary/ErrorBoundary';
import filmsReducer from '../+state/reducers/reducers';
import Root from '../../src/root/Routes';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.PRELOADED_STATE;
// Allow the passed state to be garbage-collected
delete window.PRELOADED_STATE;

const store = createStore(filmsReducer, preloadedState, applyMiddleware(thunk));
ReactDOM.hydrate(
	<Provider store={store}>
		<ErrorBoundary>
			<BrowserRouter>
				<Root />
			</BrowserRouter>
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root')
);
