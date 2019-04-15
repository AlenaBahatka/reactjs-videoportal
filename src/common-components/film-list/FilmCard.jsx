import PropTypes from 'prop-types';
import React from 'react';

FilmCard.propTypes = {
	title: PropTypes.string,
	director: PropTypes.string,
	year: PropTypes.number
};

function FilmCard(props) {
	let { title, director, year, coverPicture } = props;
	return (
		<div className="col-sm-4">
			<img src={coverPicture} alt={title} />
			<h2> {title} </h2>
			<span> {director} </span>
			<span> {year} </span>
		</div>
	);
}

export default FilmCard;
