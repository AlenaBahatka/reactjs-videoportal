import React from 'react';
import { shallow } from 'enzyme';
import FilmCard from './FilmCard';

describe('FilmCard', () => {
	it('should correctly render component', () => {
		let filmCardComponent = shallow(
			<FilmCard title="Some title" director="One director" year={2019} coverPicture="some picture url" />
		);
		expect(filmCardComponent).toMatchSnapshot();
	});
});
