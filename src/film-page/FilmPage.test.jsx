import React from 'react';
import { shallow, mount } from 'enzyme';
import FilmPage from './FilmPage';

let film = {},
	similarFilms = [];

describe('FilmPage', () => {
	it('should correctly render component', () => {
		let filmPageComponent = shallow(<FilmPage film={film} similarFilms={similarFilms} />);

		expect(filmPageComponent).toMatchSnapshot();
	});
});
