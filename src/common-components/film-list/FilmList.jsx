import PropTypes from 'prop-types';
import React from 'react';
import FilmCard from './FilmCard';

FilmList.propTypes = {
	films: PropTypes.array
};

function FilmList(props) {
	return (
		<div>
			{props.films.map((film, i) => (
				<FilmCard
					title={film.title}
					director={film.director}
					year={film.year}
					coverPicture={film.coverPicture}
					key={film.id}
				/>
			))}
		</div>
	);
}

export default FilmList;
