import React from 'react';
import { shallow } from 'enzyme';
import FilmToolbar from './FilmToolbar';

describe('FilmToolbar', () => {
	it('should correctly render component', () => {
		let filmToolbarComponent = shallow(<FilmToolbar genre="drama" />);

		expect(filmToolbarComponent).toMatchSnapshot();
	});
});
