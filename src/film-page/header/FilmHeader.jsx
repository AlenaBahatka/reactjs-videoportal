import React from 'react';

function FilmHeader(props) {
	let { title, year, coverPicture, rating, description, fullDescription, duration } = props.filmInfo;
	return (
		<div className="row">
			<div className="col-sm-6">
				<img src={coverPicture} alt={title} />
			</div>
			<div className="col-sm-6" id="filmAdditionalInfo">
				<h2>
					{title} <span>{rating}</span>
				</h2>
				<span id="filmDescription"> {description} </span>
				<span id="filmYear"> {year} </span>
				<span id="filmDuration"> {duration} </span>
				<div id="filmDescription">{fullDescription}</div>
			</div>
		</div>
	);
}

export default FilmHeader;
