import { createSelector } from 'reselect';

const getFilms = (state) => state.searchedFilms;
const getSortOption = (state) => state.selectedSortType;

export const getSortedFilms = createSelector([ getFilms, getSortOption ], (films, sortOption) => {
	let sortedFilms = [];
	switch (sortOption) {
		case 'releaseDate':
			sortedFilms = films.sort((a, b) => (a.fullDate > b.fullDate ? 1 : b.fullDate > a.fullDate ? -1 : 0));
			break;
		case 'rating':
			sortedFilms = films.sort((a, b) => (a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0));
			break;
	}
	return sortedFilms;
});
