import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'isomorphic-fetch';
import * as FilmUtil from '../../util/FilmUtil';

import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
	it('should return correct action for receiveFilms', () => {
		const films = [{ title: 'some film' }];
		const filmsAction = actions.receiveFilms(films);

		expect(filmsAction).toEqual({
			type: actions.RECEIVE_FILMS_SUCCESS,
			films
		});
	});

	it('should return correct action for receiveOneFilm', () => {
		const film = { title: 'some film' };
		const filmsAction = actions.receiveOneFilm(film);

		expect(filmsAction).toEqual({
			type: actions.RECEIVE_ONE_FILM_SUCCESS,
			film
		});
	});

	it('should return correct action for sortFilms', () => {
		const sortOption = 'title';
		const filmsAction = actions.sortFilms(sortOption);

		expect(filmsAction).toEqual({
			type: actions.SORT_FILMS,
			sortOption
		});
	});

	it('should return correct action for receiveSimilarFilms', () => {
		const similarFilms = [{ title: 'some film' }];
		const filmsAction = actions.receiveSimilarFilms(similarFilms);

		expect(filmsAction).toEqual({
			type: actions.RECEIVE_SIMILAR_FILMS_SUCCESS,
			similarFilms
		});
	});

	it('creates RECEIVE_FILMS_SUCCESS when fetching films has been done', () => {
		const films = [{ id: 1 }];
		const mockJsonPromise = Promise.resolve({ data: films });
		const mockFetchPromise = Promise.resolve({
			json: () => mockJsonPromise
		});
		jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
		jest.spyOn(FilmUtil, 'remapFilmsStructure').mockImplementation(films => films);

		const expectedActions = [{ films, type: actions.RECEIVE_FILMS_SUCCESS }];

		const store = mockStore({ searchedFilms: [] });

		return store.dispatch(actions.fetchFilms('movies')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('creates RECEIVE_ONE_FILM_SUCCESS when fetching one film has been done', () => {
		const film = { id: 1 };
		const mockJsonPromise = Promise.resolve(film);
		const mockFetchPromise = Promise.resolve({
			json: () => mockJsonPromise
		});
		jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
		jest.spyOn(FilmUtil, 'remapFilmStructure').mockImplementation(film => film);

		const expectedActions = [{ film, type: actions.RECEIVE_ONE_FILM_SUCCESS }];

		const store = mockStore({ searchedFilms: [] });

		return store.dispatch(actions.fetchOneFilm('film')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('creates RECEIVE_SIMILAR_FILMS_SUCCESS when fetching similar films has been done', () => {
		const similarFilms = [{ id: 1 }];
		const mockJsonPromise = Promise.resolve({ data: similarFilms });
		const mockFetchPromise = Promise.resolve({
			json: () => mockJsonPromise
		});
		jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
		jest.spyOn(FilmUtil, 'remapFilmsStructure').mockImplementation(films => films);

		const expectedActions = [{ similarFilms, type: actions.RECEIVE_SIMILAR_FILMS_SUCCESS }];

		const store = mockStore({ searchedFilms: [] });

		return store.dispatch(actions.fetchSimilarFilms('films')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
