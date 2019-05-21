import getSortedFilms from './selectors';

describe('selectors', () => {
	it('should correctly remap films id selected option was releaseDate', () => {
		const film1 = {
			fullDate: 2018
		};
		const film2 = {
			fullDate: 2019
		};
		const film3 = {
			fullDate: 2019
		};
		const film4 = {
			fullDate: 2015
		};
		const films = [film2, film4, film1, film3];
		const expecteFilms = [film4, film1, film2, film3];

		const selected = getSortedFilms.resultFunc(films, 'releaseDate');
		expect(selected).toEqual(expecteFilms);
	});

	it('should correctly remap films id selected option was rating', () => {
		const film1 = {
			rating: 8
		};
		const film2 = {
			rating: 9
		};
		const film3 = {
			rating: 9
		};
		const film4 = {
			rating: 5
		};
		const films = [film2, film4, film1, film3];
		const expecteFilms = [film4, film1, film2, film3];

		const selected = getSortedFilms.resultFunc(films, 'rating');
		expect(selected).toEqual(expecteFilms);
	});
});
