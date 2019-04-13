import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import 'isomorphic-fetch';
import { Provider } from 'react-redux';
import * as Util from '../util/FilmUtil';
import ConnectedSearchPage, { SearchPage } from './SearchPage';

const film1 = {
	title: 'Roma',
	director: 'Alfonso Cuarón',
	genre: 'comedy',
	year: 2017,
	coverPicture:
		'https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	rating: 8,
	description: 'dddd',
	fullDescription: 'ddddddd',
	duration: 124,
	id: 'id1'
};
const film2 = {
	title: 'Tristana',
	director: ' Luis Buñuel',
	genre: 'drama',
	year: 1970,
	coverPicture:
		'https://m.media-amazon.com/images/M/MV5BMDU5ZWE3M2MtZTVhYS00Yjk2LWFkYjQtZDdkNzc1YmJmMGIxXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_UY268_CR9,0,182,268_AL_.jpg',
	rating: 9,
	description: 'ffff',
	fullDescription: 'ffffff',
	duration: 123,
	id: 'id2'
};
const film3 = {
	title: 'Roma2',
	director: 'Alfonso Cuarón',
	genre: 'comedy',
	year: 2017,
	coverPicture:
		'https://m.media-amazon.com/images/M/MV5BMTU0OTc3ODk4Ml5BMl5BanBnXkFtZTgwMzM4NzI5NjM@._V1_UX182_CR0,0,182,268_AL_.jpg',
	rating: 7,
	description: 'dddd',
	fullDescription: 'ddddddd',
	duration: 124,
	id: 'id3'
};
let filmsStub = [ film1, film2, film3 ];

let initialSateStub = {
	filterOptions: {
		filterOptions: [ { name: 'title' }, { name: 'genre' } ],
		defaultChecked: 'title'
	},
	searchedFilms: filmsStub,
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
	selectedSortType: 'rating'
};
const mockStore = configureStore();
let store;

describe('SearchPage', () => {
	beforeEach(() => {
		store = mockStore(initialSateStub);
		const mockSuccessResponse = {
			data: [
				{
					id: 447365,
					title: 'Guardians of the Galaxy Vol. 3',
					tagline: '',
					vote_average: 0,
					vote_count: 9,
					release_date: '2020-05-01',
					poster_path: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
					overview: "The third film based on Marvel's Guardians of the Galaxy.",
					budget: 0,
					revenue: 0,
					genres: [ 'Action', 'Adventure', 'Science Fiction' ],
					runtime: null
				}
			]
		};
		const mockJsonPromise = Promise.resolve(mockSuccessResponse);
		const mockFetchPromise = Promise.resolve({
			json: () => mockJsonPromise
		});
		jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
		jest.spyOn(Util, 'remapFilmsStructure').mockImplementation(() => filmsStub);
	});

	it('should correctly render component', () => {
		let searchPageComponent = shallow(<SearchPage searchedFilms={filmsStub} />);

		expect(searchPageComponent).toMatchSnapshot();
		expect(global.fetch).toHaveBeenCalledTimes(1);
	});

	it('should sort films correctly', () => {
		let searchPageComponent = mount(
			<Provider store={store}>
				<ConnectedSearchPage />
			</Provider>
		);

		expect(searchPageComponent.find(SearchPage).prop('searchedFilms')[0]).toEqual(film1);
		expect(searchPageComponent.find(SearchPage).prop('searchedFilms')[1]).toEqual(film2);
		expect(searchPageComponent.find(SearchPage).prop('searchedFilms')[2]).toEqual(film3);

		searchPageComponent.find(SearchPage).find("input[value='rating']").simulate('change');
		expect(global.fetch).toHaveBeenCalledTimes(2);
		expect(Util.remapFilmsStructure).toHaveBeenCalledTimes(1);
		expect(searchPageComponent.find(SearchPage).prop('searchedFilms').length).toEqual(3);
		expect(searchPageComponent.find(SearchPage).prop('searchedFilms')[0]).toEqual(film1);
		expect(searchPageComponent.find(SearchPage).prop('searchedFilms')[1]).toEqual(film2);
		// expect(searchPageComponent.find(SearchPage).prop('searchedFilms')[2]).toEqual(film2);
	});

	it('should correctly render component', () => {
		let searchPageComponent = mount(
			<Provider store={store}>
				<ConnectedSearchPage />
			</Provider>
		);
		searchPageComponent.find(SearchPage).instance().handleSearchClick('Roma2', 'genre');

		expect(searchPageComponent.find(SearchPage).prop('searchedFilms').length).toEqual(3);
	});
});
