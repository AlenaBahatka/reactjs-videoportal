// @flow
import React from 'react';
import type { Element } from 'react';
import FilmCard from './FilmCard';

type FilmListPropTypes = {
    films: [{
		title: string,
		director: string,
		year: number,
		coverPicture: string,
		id: number
	}]
}

function FilmList(props: FilmListPropTypes): Element<any> {
	return (
		<div>
			{props.films.map((film) => (
				<FilmCard
					title={film.title}
					director={film.director}
					year={film.year}
					coverPicture={film.coverPicture}
					filmId={film.id}
					key={film.id}
				/>
			))}
		</div>
	);
}

export default FilmList;
