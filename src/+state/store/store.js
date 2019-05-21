// @flow
import { createStore, applyMiddleware } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import thunk from 'redux-thunk';

import filmsReducer from '../reducers/reducers';

export default function configureStore(initialState?: Object) {
	const persistConfig = {
		key: 'videoportalStorage',
		storage
	};

	const pReducer = persistReducer(persistConfig, filmsReducer);

	const store = createStore(pReducer, initialState, applyMiddleware(thunk));
	const persistor = persistStore(store);

	return { store, persistor };
}
