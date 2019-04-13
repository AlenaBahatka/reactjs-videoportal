import * as actions from './actions';
import {
	RECEIVE_FILMS_SUCCESS,
	SORT_FILMS,
	RECEIVE_ONE_FILM_SUCCESS,
	RECEIVE_SIMILAR_FILMS_SUCCESS
} from '../actions/actions';

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
});
