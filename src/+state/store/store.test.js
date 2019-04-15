import configureStore from './store';
import filmsReducer from '../reducers/reducers';

describe('configureStore', () => {
	it('should correctly configureStore', () => {
		filmsReducer.default = jest.fn();
		const { store } = configureStore();
		store.dispatch({
			type: 'TestActions'
		});
		expect(filmsReducer.default.mock.calls.length).toBe(0);
	});
});
