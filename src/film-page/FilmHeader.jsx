import React from 'react';

function FilmHeader(props) {
    let {title, year, coverPicture, rating, description, fullDescription, duration} = props.filmInfo;
    return (
        <div className="row">
            <div className="col-sm-6">
                <img src={coverPicture} alt={title}></img>
            </div>
            <div className="col-sm-6">
                <h2>{title} <span>{rating}</span></h2>
                <span> {description} </span>
                <span> {year} </span>
                <span> {duration} </span>
                <div>
                    {fullDescription}
                </div>
            </div>

        </div>
    );
}

export default FilmHeader;