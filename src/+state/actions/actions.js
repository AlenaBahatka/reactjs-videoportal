// @flow
import fetch from 'node-fetch';
import { remapFilmsStructure, remapFilmStructure } from '../../util/FilmUtil';

export const RECEIVE_FILMS_SUCCESS = 'RECEIVE_FILMS_SUCCESS';
export const SORT_FILMS = 'SORT_FILMS';
export const RECEIVE_ONE_FILM_SUCCESS = 'RECEIVE_ONE_FILM_SUCCESS';
export const RECEIVE_SIMILAR_FILMS_SUCCESS = 'RECEIVE_SIMILAR_FILMS_SUCCESS';
export const FILTER_FILMS = 'FILTER_FILMS';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';

// action creator. can dispatch using function and not an object
// as it will be created by the creator
export const receiveFilms = (films: Array<Object>) => ({
	type: RECEIVE_FILMS_SUCCESS,
	films
});

export const receiveOneFilm = (film: Object) => ({
	type: RECEIVE_ONE_FILM_SUCCESS,
	film
});

export const receiveSimilarFilms = (similarFilms: Array<Object>) => ({
	type: RECEIVE_SIMILAR_FILMS_SUCCESS,
	similarFilms
});

export const filterFilms = (query: string, filterOption: string) => ({
	type: FILTER_FILMS,
	checkedFilter: filterOption,
	query
});

export const sortFilms = (sortOption: string) => ({
	type: SORT_FILMS,
	sortOption
});

export const emptySearch = () => ({
	type: EMPTY_SEARCH
});

export const fetchFilms = (query: string, filterOption: string) => {
	const url = `https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=${filterOption}`;

	return (dispatch: function) =>
		fetch(url).then((response) => response.json()).then(({ data: films }) => {
			dispatch(receiveFilms(remapFilmsStructure(films)));
		});
};

export const fetchOneFilm = (url: string) => (dispatch: function) =>
	fetch(url).then((response) => response.json()).then((film) => {
		const remapedFilm = remapFilmStructure(film);
		dispatch(receiveOneFilm(remapedFilm));
	});

export const fetchSimilarFilms = (selectedFilmGenre: string) => (dispatch: function) => {
	return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${selectedFilmGenre}&searchBy=genres`)
		.then((response) => response.json())
		.then(({ data: films }) => {
			dispatch(receiveSimilarFilms(remapFilmsStructure(films)));
		});
};

export const getFilmWithSimilar = (filmId: number) => {
	const urlFilm = `https://reactjs-cdp.herokuapp.com/movies/${filmId}`;
	return (dispatch: function, getState: function) =>
		dispatch(fetchOneFilm(urlFilm)).then(() => {
			const selectedFilmGenre = getState().filmsReducer.selectedFilm.genre;
			return dispatch(fetchSimilarFilms(selectedFilmGenre));
		});
};
