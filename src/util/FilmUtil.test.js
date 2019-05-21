import * as FilmUtil from './FilmUtil';

describe('FilmUtil', () => {
	it('should correctly remap films', () => {
		const films = [
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
				genres: ['Action', 'Adventure', 'Science Fiction'],
				runtime: null
			}
		];
		const date = new Date('2020-05-01');

		const expectedFilms = [
			{
				coverPicture: 'https://image.tmdb.org/t/p/w500/ldoY4fTZkGISMidNw60GHoNdgP8.jpg',
				description: '',
				director: 'Unknown director',
				duration: null,
				fullDate: date,
				fullDescription: "The third film based on Marvel's Guardians of the Galaxy.",
				genre: 'Action',
				id: 447365,
				rating: 0,
				title: 'Guardians of the Galaxy Vol. 3',
				year: 2020
			}
		];
		const remapedFilms = FilmUtil.remapFilmsStructure(films);

		expect(remapedFilms).toEqual(expectedFilms);
	});
});
