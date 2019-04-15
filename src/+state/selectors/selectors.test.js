import { getSortedFilms } from './selectors';

describe('selectors', () => {
	it('should correctly remap films id selected option was releaseDate', () => {
		let film1 = {
			fullDate: 2018
		};
		let film2 = {
			fullDate: 2019
		};
		let film3 = {
			fullDate: 2019
		};
		let film4 = {
			fullDate: 2015
		};
		let films = [ film2, film4, film1, film3 ];
		let expecteFilms = [ film4, film1, film2, film3 ];

		const selected = getSortedFilms.resultFunc(films, 'releaseDate');
		expect(selected).toEqual(expecteFilms);
	});

	it('should correctly remap films id selected option was rating', () => {
		let film1 = {
			rating: 8
		};
		let film2 = {
			rating: 9
		};
		let film3 = {
			rating: 9
		};
		let film4 = {
			rating: 5
		};
		let films = [ film2, film4, film1, film3 ];
		let expecteFilms = [ film4, film1, film2, film3 ];

		const selected = getSortedFilms.resultFunc(films, 'rating');
		expect(selected).toEqual(expecteFilms);
	});
});
