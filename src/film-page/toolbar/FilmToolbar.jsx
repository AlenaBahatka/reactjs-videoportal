import React from 'react';

function FilmToolbar(props) {
    return (
        <div className="row">
            <div className="col-sm-9">Films by <b>{props.genre}</b> genre</div>
        </div>
    );
}

export default FilmToolbar;