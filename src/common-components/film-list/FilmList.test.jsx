import React from 'react';
import { shallow, mount } from 'enzyme';
import FilmCard from './FilmCard';
import FilmList from './FilmList';

let films;
describe('FilmList', () => {
	it('should correctly render component in case array is empty', () => {
		films = [];
		let filmListComponent = shallow(<FilmList films={films} />);

		expect(filmListComponent.find('div')).toBeTruthy();
		expect(filmListComponent.find('div').children().length).toBeFalsy();
	});

	describe('FilmList - some films in array', () => {
		beforeAll(() => {
			films = [
				{
					title: 'Roma',
					director: 'Alfonso Cuarón',
					year: 2017,
					coverPicture: 'pic.jpg',
					id: 'id1'
				},
				{
					title: 'Tristana',
					director: 'Luis Buñuel',
					year: 1970,
					coverPicture: 'pic2.jpg',
					id: 'id2'
				}
			];
		});

		it('should correctly render 2 items', () => {
			let filmListComponent = shallow(<FilmList films={films} />);

			expect(filmListComponent).toMatchSnapshot();
		});

		it('should correctly render 2 items - FilmCard', () => {
			let filmListComponent = mount(<FilmList films={films} />);

			expect(filmListComponent.find(FilmCard).length).toBe(2);
		});
	});
});
