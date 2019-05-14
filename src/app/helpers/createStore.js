import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import filmsReducer from '../../+state/reducers/reducers';

export default () => {
	const store = createStore(filmsReducer, {}, applyMiddleware(thunk));

	return store;
};
