import { RECEIVE_FILMS_SUCCESS, SORT_FILMS, RECEIVE_ONE_FILM_SUCCESS, RECEIVE_SIMILAR_FILMS_SUCCESS } from '../actions/actions';

let initialState = {
	filterOptions: {
		filterOptions: [ { name: 'title' }, { name: 'genre' } ],
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

function filmsReducer(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_FILMS_SUCCESS: {
            return {
                ...state,
                searchedFilms: action.films
            };
        }
			
        case SORT_FILMS: {          
            let sortedFilms, unsortedFilms = state.searchedFilms.slice();
            switch (action.sortOption) {
                case 'releaseDate':
                    sortedFilms = unsortedFilms.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0));
                    break;
                case 'rating':
                    sortedFilms = unsortedFilms.sort((a, b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0));
                    break;
            }
            return {
                ...state,
                searchedFilms: sortedFilms,
            };
        }
           
        case RECEIVE_ONE_FILM_SUCCESS: {
            return {
                ...state,
                selectedFilm: action.film
            }
        }

        case RECEIVE_SIMILAR_FILMS_SUCCESS: {
            return {
                ...state,
                similarFilms: action.similarFilms 
            }
        }
		default:
			return state;
	}
}

export default filmsReducer
