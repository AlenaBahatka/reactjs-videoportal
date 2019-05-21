// @flow
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import type { Element } from 'react';

type FilmCardPropTypes = {
    title: string, 
    director: string,  
	year: string, 
	coverPicture: string, 
	filmId: number
};

function FilmCard(props: FilmCardPropTypes): Element<any> {
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
