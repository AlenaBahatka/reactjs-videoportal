import filmReducer from './reducers';
import {
	RECEIVE_FILMS_SUCCESS,
	SORT_FILMS,
	RECEIVE_ONE_FILM_SUCCESS,
	RECEIVE_SIMILAR_FILMS_SUCCESS,
	FILTER_FILMS
} from '../actions/actions';

let state;

describe('filmReducer', () => {
	beforeEach(() => {
		state = {
			filterOptions: {
				filterOptions: [{ name: 'title' }, { name: 'genre' }],
				defaultChecked: 'title'
			},
			searchedFilms: [],
			sortTypes: [
				{
					id: 'releaseDate',
					displayName: 'release date'
				},
				{
					id: 'rating',
					displayName: 'rating'
				}
			],
			selectedSortType: 'rating',
			selectedFilm: {},
			similarFilms: []
		};
	});

	it('should return correct new state for receiveFilms', () => {
		const films = [{ title: 'some film' }];
		const receiveAction = {
			type: RECEIVE_FILMS_SUCCESS,
			films
		};
		const newState = filmReducer(state, receiveAction);

		expect(newState.searchedFilms.length).toBeTruthy();
	});

	it('should return correct new state when sortFilms ', () => {
		const selectedSortType = 'title';
		const sortAction = {
			type: SORT_FILMS,
			sortOption: selectedSortType
		};

		const newState = filmReducer(state, sortAction);

		expect(newState.selectedSortType).toEqual(selectedSortType);
	});

	it('default seleted selectedFilm should be empty', () => {
		expect(state.selectedFilm).toEqual({});
	});

	it('should return correct new state when receive one film', () => {
		const film = { title: 'some film' };

		const receiveOneAction = {
			type: RECEIVE_ONE_FILM_SUCCESS,
			film
		};

		const newState = filmReducer(state, receiveOneAction);

		expect(newState.selectedFilm).toEqual(film);
	});

	it('should return the same state for unknown action', () => {
		const film = { title: 'some film' };

		const unknownAction = {
			type: 'UNKNOWN',
			film
		};
		const newState = filmReducer(state, unknownAction);

		expect(newState).toEqual(state);
	});

	it('should update similar films for similarFilms action', () => {
		const similarFilms = [{ title: 'some film' }];

		const similarFilmsAction = {
			type: RECEIVE_SIMILAR_FILMS_SUCCESS,
			similarFilms
		};
		const newState = filmReducer(state, similarFilmsAction);

		expect(newState.similarFilms).toEqual(similarFilms);
	});

	describe('filter action', () => {
		let payload; let
			newState;

		beforeEach(() => {
			payload = {
				checkedFilter: 'genre',
				query: 'cat'
			};
			const filterAction = {
				type: FILTER_FILMS,
				...payload
			};
			newState = filmReducer(state, filterAction);
		});

		it('should update query in state in case filter option', () => {
			expect(newState.query).toEqual(payload.query);
		});

		it('should update defaultChecked in state in case filter option', () => {
			expect(newState.filterOptions.defaultChecked).toEqual(payload.checkedFilter);
		});
	});
});
