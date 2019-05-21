// @flow
import { combineReducers } from 'redux';
import {List} from 'immutable';
import type {StoreFlowtype} from '../../flowtypes/storeFlowtype';

import {
	RECEIVE_FILMS_SUCCESS,
	SORT_FILMS,
	RECEIVE_ONE_FILM_SUCCESS,
	RECEIVE_SIMILAR_FILMS_SUCCESS,
	FILTER_FILMS,
	EMPTY_SEARCH
} from '../actions/actions';

const initialState = {
	filterOptions: {
		filterOptions: [{ name: 'title' }, { name: 'genre' }],
		defaultChecked: 'title'
	},
	searchedFilms: List(),
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
	similarFilms: [],
	query: ''
};

function filmsReducer(state: StoreFlowtype = initialState, action: Object): StoreFlowtype {
	switch (action.type) {
	case RECEIVE_FILMS_SUCCESS: {
		return {
			...state,
			searchedFilms: action.films
		};
	}

	case FILTER_FILMS: {
		const { checkedFilter, query } = action;
		return {
			...state,
			filterOptions: {
				...state.filterOptions,
				defaultChecked: checkedFilter
			},
			query
		};
	}

	case SORT_FILMS: {
		return {
			...state,
			selectedSortType: action.sortOption
		};
	}

	case RECEIVE_ONE_FILM_SUCCESS: {
		return {
			...state,
			selectedFilm: action.film
		};
	}

	case RECEIVE_SIMILAR_FILMS_SUCCESS: {
		return {
			...state,
			similarFilms: action.similarFilms
		};
	}

	case EMPTY_SEARCH: {
		return {
			...state,
			selectedFilm: {},
			similarFilms: [],
			query: '',
			searchedFilms: []
		};
	}

	default:
		return state;
	}
}

const rootReducer = combineReducers({
	filmsReducer
});

export default rootReducer;
