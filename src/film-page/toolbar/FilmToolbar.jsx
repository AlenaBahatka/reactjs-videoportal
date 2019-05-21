// @flow
import React from 'react';

type FilmToolbarPropTypes = {
	genre: string
}
function FilmToolbar(props: FilmToolbarPropTypes) {
	return (
		<div className="row">
			<div className="col-sm-9">
				Films by <b>{props.genre}</b> genre
			</div>
		</div>
	);
}

export default FilmToolbar;
