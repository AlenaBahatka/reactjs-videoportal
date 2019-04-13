// function to map service structure of response to the correct one
export const remapFilmsStructure = (films = []) => {
	let filmsWithUpdatedStructure = [];
	films.forEach((film) => {
		filmsWithUpdatedStructure.push(remapFilmStructure(film));
	});
	return filmsWithUpdatedStructure;
};

export const remapFilmStructure = (film = {}) => {
	let filmDate = new Date(film.release_date);
	return {
		title: film.title,
		director: film.director || 'Unknown director',
		genre: film.genres && film.genres[0],
		year: filmDate.getFullYear(),
		coverPicture: film.poster_path,
		rating: film.vote_average,
		description: film.tagline,
		fullDescription: film.overview,
		duration: film.runtime,
		id: film.id
	};
};
