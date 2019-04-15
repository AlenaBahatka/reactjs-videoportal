import React from 'react';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import 'isomorphic-fetch';
import { Provider } from 'react-redux';
import * as Util from '../util/FilmUtil';
import ConnectedSearchPage, { SearchPage } from './SearchPage';
import thunk from 'redux-thunk';

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
const mockStore = configureStore([ thunk ]);
let store;

describe('SearchPage', () => {
	let fetchFilmsMock;
	beforeEach(() => {
		store = mockStore(initialSateStub);
		fetchFilmsMock = jest.fn();
	});

	it('should correctly render component', () => {
		let searchPageComponent = shallow(<SearchPage searchedFilms={filmsStub} fetchFilms={fetchFilmsMock} />);

		expect(searchPageComponent).toMatchSnapshot();
	});

	describe('handleSearch', () => {
		let filterFilmsMock, sortHandlerMock;
		beforeEach(() => {
			filterFilmsMock = jest.fn();
			sortHandlerMock = jest.fn();
			let searchPageComponent = mount(
				<SearchPage
					searchedFilms={filmsStub}
					filterOptions={initialSateStub.filterOptions}
					filterFilms={filterFilmsMock}
					fetchFilms={fetchFilmsMock}
					sortTypes={initialSateStub.sortTypes}
					sortFilms={sortHandlerMock}
				/>
			);
			searchPageComponent.find(SearchPage).instance().handleSearchClick('Roma2', 'genre');
		});
		it('should call fetching films twice', () => {
			expect(fetchFilmsMock.mock.calls.length).toBe(2);
		});
		it('should call filtering once', () => {
			expect(filterFilmsMock.mock.calls.length).toBe(1);
		});
	});
});
