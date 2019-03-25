import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FilmList from '../common-components/FilmList'
import FilmToolbar from './FilmToolbar';
import FilmHeader from './FilmHeader';
import Footer from '../common-components/Footer';
import NetflixLabel from '../common-components/NetflixLabel';

class FilmPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            film: this.props.film,
            similarFilms: this.props.similarFilms
        }
    }
    
    render() {
        return (
            <div className="panel panel-default">
                <div  className="panel-heading">
                    <div>
                        <NetflixLabel/>
                        <button>Search</button> 
                    </div>
                    <FilmHeader filmInfo={this.state.film}></FilmHeader>
                </div>
                <div className="panel-body">
                    <FilmToolbar genre={this.state.film.genre}/>
                    <FilmList films={this.state.similarFilms}></FilmList>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

FilmPage.propTypes = {
    film: PropTypes.object,
    similarFilms: PropTypes.array
};

export default FilmPage;