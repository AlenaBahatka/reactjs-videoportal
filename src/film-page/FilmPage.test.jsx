import React from 'react';
import { shallow, mount } from 'enzyme';
import { FilmPage } from './FilmPage';

let film = {},
	similarFilms = [];

describe('FilmPage', () => {
	it('should correctly render component', () => {
		const getFilmWithSimilarStub = jest.fn();

		let filmPageComponent = shallow(
			<FilmPage film={film} similarFilms={similarFilms} getFilmWithSimilar={getFilmWithSimilarStub} />
		);

		expect(filmPageComponent).toMatchSnapshot();
	});

	it('should correctly render component', () => {
		const getFilmWithSimilarStub = jest.fn();
		mount(
			<FilmPage film={film} similarFilms={similarFilms} getFilmWithSimilar={getFilmWithSimilarStub} />
		);

		expect(getFilmWithSimilarStub.mock.calls.length).toBe(1);
	});
});
