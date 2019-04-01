import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FilmList from '../common-components/film-list/FilmList'
import FilmToolbar from './toolbar/FilmToolbar';
import FilmHeader from './header/FilmHeader';
import Footer from '../common-components/footer/Footer';
import NetflixLabel from '../common-components/labels/NetflixLabel';

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