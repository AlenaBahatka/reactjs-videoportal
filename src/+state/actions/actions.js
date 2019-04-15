import { remapFilmsStructure, remapFilmStructure } from '../../util/FilmUtil';

export const RECEIVE_FILMS_SUCCESS = 'RECEIVE_FILMS_SUCCESS';
export const SORT_FILMS = 'SORT_FILMS';
export const RECEIVE_ONE_FILM_SUCCESS = 'RECEIVE_ONE_FILM_SUCCESS';
export const RECEIVE_SIMILAR_FILMS_SUCCESS = 'RECEIVE_SIMILAR_FILMS_SUCCESS';
export const FILTER_FILMS = 'FILTER_FILMS';

// action creator. can dispatch using function and not an object
// as it will be created by the creator
export const receiveFilms = (films) => ({
	type: RECEIVE_FILMS_SUCCESS,
	films
});

export const receiveOneFilm = (film) => ({
	type: RECEIVE_ONE_FILM_SUCCESS,
	film
});

export const receiveSimilarFilms = (similarFilms) => ({
	type: RECEIVE_SIMILAR_FILMS_SUCCESS,
	similarFilms
});

export const filterFilms = (query, filterOption) => ({
	type: FILTER_FILMS,
	checkedFilter: filterOption,
	query
});

export const sortFilms = (sortOption) => ({
	type: SORT_FILMS,
	sortOption
});

export const fetchFilms = (url) => {
	return (dispatch) => {
		return fetch(url).then((response) => response.json()).then(({ data: films }) => {
			dispatch(receiveFilms(remapFilmsStructure(films)));
		});
	};
};

export const fetchOneFilm = (url) => {
	return (dispatch) => {
		return fetch(url).then((response) => response.json()).then((film) => {
			let remapedFilm = remapFilmStructure(film);
			dispatch(receiveOneFilm(remapedFilm));
		});
	};
};

export const fetchSimilarFilms = (selectedFilmGenre) => {
	return (dispatch) => {
		return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${selectedFilmGenre}&searchBy=genres`)
			.then((response) => response.json())
			.then(({ data: films }) => {
				dispatch(receiveSimilarFilms(remapFilmsStructure(films)));
			});
	};
};

export const getFilmWithSimilar = (urlFilm) => {
	return (dispatch, getState) => {
		return dispatch(fetchOneFilm(urlFilm)).then(() => {
			const selectedFilmGenre = getState().selectedFilm.genre;
			return dispatch(fetchSimilarFilms(selectedFilmGenre));
		});
	};
};
