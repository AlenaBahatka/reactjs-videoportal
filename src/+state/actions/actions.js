export const RECEIVE_FILMS_SUCCESS = 'RECEIVE_FILMS_SUCCESS';
export const SORT_FILMS = 'SORT_FILMS';
export const RECEIVE_ONE_FILM_SUCCESS = 'RECEIVE_ONE_FILM_SUCCESS';
export const RECEIVE_SIMILAR_FILMS_SUCCESS = 'RECEIVE_SIMILAR_FILMS_SUCCESS';

// action creator. can dispatch using function and not an object
// as it will be created by the creator
export const receiveFilms = (films) => ({
	type: RECEIVE_FILMS_SUCCESS,
	films
});

export const sortFilms = (sortOption) => ({
	type: SORT_FILMS,
	sortOption
});

export const receiveOneFilm = (film) => ({
	type: RECEIVE_ONE_FILM_SUCCESS,
	film
});

export const receiveSimilarFilms = (similarFilms) => ({
	type: RECEIVE_SIMILAR_FILMS_SUCCESS,
	similarFilms
});
