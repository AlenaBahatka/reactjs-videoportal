import React from 'react';

function FilmToolbar(props) {
    return (
        <div className="row">
            <div className="col-sm-9">Films by {props.genre} genre</div>
        </div>
    );
}

export default FilmToolbar;