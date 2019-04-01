import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchPage from './SearchPage';
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
	rating: 8,
	description: 'dddd',
	fullDescription: 'ddddddd',
	duration: 124,
	id: 'id3'
};
let filmsStub = [ film1, film2, film3];

describe('SearchPage', () => {
	it('should correctly render component', () => {
		let searchPageComponent = shallow(<SearchPage films={filmsStub} />);
		expect(searchPageComponent).toMatchSnapshot();
	});

	it('should sort films correctly', () => {
        let searchPageComponent = mount(<SearchPage films={filmsStub} />);
        
		expect(searchPageComponent.state().selectedSortType).toEqual('releaseDate');
        expect(searchPageComponent.state().searchedFilms[0]).toEqual(film2);
        expect(searchPageComponent.state().searchedFilms[1]).toEqual(film1);
        expect(searchPageComponent.state().searchedFilms[2]).toEqual(film3);

		searchPageComponent.find("input[value='rating']").simulate('change');

        expect(searchPageComponent.state().searchedFilms[0]).toEqual(film1);
        expect(searchPageComponent.state().searchedFilms[1]).toEqual(film3);
        expect(searchPageComponent.state().searchedFilms[2]).toEqual(film2);
    });
    
    it('should correctly render component', () => {
        let searchPageComponent = mount(<SearchPage films={filmsStub} />);
        searchPageComponent.instance().handleSearchClick('Roma2', 'title');
        expect(searchPageComponent.state().searchedFilms.length).toEqual(1);
	});
});
