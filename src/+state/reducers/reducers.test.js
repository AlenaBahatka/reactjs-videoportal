import filmReducer from './reducers';
import { RECEIVE_FILMS_SUCCESS, SORT_FILMS, RECEIVE_ONE_FILM_SUCCESS, RECEIVE_SIMILAR_FILMS_SUCCESS } from '../actions/actions';

let state;

describe('filmReducer', () => {
    beforeEach(() => {
        state = {
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
    })
	it('should return correct new state for receiveFilms', () => {
		let films = [{title:'some film'}];
        let receiveAction = {
            type: RECEIVE_FILMS_SUCCESS,
            films
        };
        let newState = filmReducer(state, receiveAction);

		expect(newState.searchedFilms.length).toBeTruthy();
    });
    
    it('should return correct new state for sortFilms - sort by rating', () => {
        let firstFilm = {rating: 1};
        let secondFilm = {rating: 0};
        let thirdFilm = {rating: 0};
        let films = [firstFilm, secondFilm, thirdFilm];

        state.searchedFilms = films;
        let sortAction = {
            type: SORT_FILMS,
            sortOption: 'rating'
        };

        let newState = filmReducer(state, sortAction);

        expect(newState.searchedFilms[0]).toEqual(secondFilm);
        expect(newState.searchedFilms[1]).toEqual(thirdFilm);
        expect(newState.searchedFilms[2]).toEqual(firstFilm);
    });

    it('should return correct new state for sortFilms - sort by year', () => {
        let firstFilm = {year: 2018};
        let secondFilm = {year: 2017};
        let thirdFilm = {year: 2017};
        let films = [firstFilm, secondFilm, thirdFilm];

        state.searchedFilms = films;
        let sortAction = {
            type: SORT_FILMS,
            sortOption: 'releaseDate'
        };

        let newState = filmReducer(state, sortAction);

        expect(newState.searchedFilms[0]).toEqual(secondFilm);
        expect(newState.searchedFilms[1]).toEqual(thirdFilm);
        expect(newState.searchedFilms[2]).toEqual(firstFilm);
    });

    it('should return correct new state for sortFilms - sort by year', () => {      
        let film = {title:'some film'};

        let receiveOneAction = {
            type: RECEIVE_ONE_FILM_SUCCESS,
            film
        };
        expect(state.selectedFilm).toEqual({});

        let newState = filmReducer(state, receiveOneAction);
        
        expect(state.selectedFilm).toEqual({});
        expect(newState.selectedFilm).toEqual(film);
    });

    it('should return the same state for unknown action', () => {      
        let film = {title:'some film'};

        let unknownAction = {
            type: 'UNKNOWN',
            film
        };
        let newState = filmReducer(state, unknownAction);

        expect(newState).toEqual(state);
    });
});
