import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import 'isomorphic-fetch';
import * as FilmUtil from '../../util/FilmUtil';

import * as actions from './actions';
import {
	RECEIVE_FILMS_SUCCESS,
	SORT_FILMS,
	RECEIVE_ONE_FILM_SUCCESS,
	RECEIVE_SIMILAR_FILMS_SUCCESS
} from '../actions/actions';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
	it('should return correct action for receiveFilms', () => {
		let films = [ { title: 'some film' } ];
		let filmsAction = actions.receiveFilms(films);

		expect(filmsAction).toEqual({
			type: RECEIVE_FILMS_SUCCESS,
			films
		});
	});

	it('should return correct action for receiveOneFilm', () => {
		let film = { title: 'some film' };
		let filmsAction = actions.receiveOneFilm(film);

		expect(filmsAction).toEqual({
			type: RECEIVE_ONE_FILM_SUCCESS,
			film
		});
	});

	it('should return correct action for sortFilms', () => {
		let sortOption = 'title';
		let filmsAction = actions.sortFilms(sortOption);

		expect(filmsAction).toEqual({
			type: SORT_FILMS,
			sortOption
		});
	});

	it('should return correct action for receiveSimilarFilms', () => {
		let similarFilms = [ { title: 'some film' } ];
		let filmsAction = actions.receiveSimilarFilms(similarFilms);

		expect(filmsAction).toEqual({
			type: RECEIVE_SIMILAR_FILMS_SUCCESS,
			similarFilms
		});
	});

	it('creates RECEIVE_FILMS_SUCCESS when fetching films has been done', () => {
		let films = [ { id: 1 } ];
		const mockJsonPromise = Promise.resolve({ data: films });
		const mockFetchPromise = Promise.resolve({
			json: () => mockJsonPromise
		});
		jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
		jest.spyOn(FilmUtil, 'remapFilmsStructure').mockImplementation((films) => films);

		const expectedActions = [ { films, type: RECEIVE_FILMS_SUCCESS } ];

		const store = mockStore({ searchedFilms: [] });

		return store.dispatch(actions.fetchFilms('movies')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('creates RECEIVE_ONE_FILM_SUCCESS when fetching one film has been done', () => {
		let film = { id: 1 };
		const mockJsonPromise = Promise.resolve(film);
		const mockFetchPromise = Promise.resolve({
			json: () => mockJsonPromise
		});
		jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
		jest.spyOn(FilmUtil, 'remapFilmStructure').mockImplementation((film) => film);

		const expectedActions = [ { film, type: RECEIVE_ONE_FILM_SUCCESS } ];

		const store = mockStore({ searchedFilms: [] });

		return store.dispatch(actions.fetchOneFilm('film')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	it('creates RECEIVE_SIMILAR_FILMS_SUCCESS when fetching similar films has been done', () => {
		let similarFilms = [ { id: 1 } ];
		const mockJsonPromise = Promise.resolve({ data: similarFilms });
		const mockFetchPromise = Promise.resolve({
			json: () => mockJsonPromise
		});
		jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
		jest.spyOn(FilmUtil, 'remapFilmsStructure').mockImplementation((films) => films);

		const expectedActions = [ { similarFilms, type: RECEIVE_SIMILAR_FILMS_SUCCESS } ];

		const store = mockStore({ searchedFilms: [] });

		return store.dispatch(actions.fetchSimilarFilms('films')).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
	});
});
