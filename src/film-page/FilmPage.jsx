import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmList from '../common-components/film-list/FilmList'
import FilmToolbar from './toolbar/FilmToolbar';
import FilmHeader from './header/FilmHeader';
import Footer from '../common-components/footer/Footer';
import NetflixLabel from '../common-components/labels/NetflixLabel';
import {remapFilmStructure, remapFilmsStructure} from '../util/FilmUtil'

import * as actions from '../+state/actions/actions'

export class FilmPage extends PureComponent {

    componentDidMount() {
        let filmId = 353081; // TODO: should be taken from url later
        fetch(`https://reactjs-cdp.herokuapp.com/movies/${filmId}`)
        .then(response => response.json())
        .then((film) => {
            let remapedFilm = remapFilmStructure(film);
            this.props.receiveOneFilm(remapedFilm);
            return fetch(`https://reactjs-cdp.herokuapp.com/movies?search=${remapedFilm.genre}&searchBy=genres`)
        })
        .then(response => response.json())
        .then(({data: similarFilms}) => {
            this.props.receiveSimilarFilms(remapFilmsStructure(similarFilms))
        });
    }

    render() {
        let { film, similarFilms } = this.props;
        return (
            <div className="panel panel-default">
                <div  className="panel-heading">
                    <div>
                        <NetflixLabel/>
                        <button>Search</button> 
                    </div>
                    <FilmHeader filmInfo={film}></FilmHeader>
                </div>
                <div className="panel-body">
                    <FilmToolbar genre={film.genre}/>
                    <FilmList films={similarFilms}></FilmList>
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

const mapStateToProps = (state) => {
    return {
        film: state.selectedFilm,
        similarFilms: state.similarFilms
    }
}

export default connect(mapStateToProps, actions)(FilmPage);