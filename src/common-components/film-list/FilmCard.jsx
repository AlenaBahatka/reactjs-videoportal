import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

FilmCard.propTypes = {
	title: PropTypes.string,
	director: PropTypes.string,
	year: PropTypes.number
};

function FilmCard(props) {
	let { title, director, year, coverPicture, filmId } = props;
	const uri = `/film/${filmId}`;

	return (
		<div className="col-sm-4">
			<img src={coverPicture} alt={title} />
			<Link to={uri}>
				<h2>{title}</h2>
			</Link>
			<span> {director} </span>
			<span> {year} </span>
		</div>
	);
}

export default withRouter(FilmCard);
