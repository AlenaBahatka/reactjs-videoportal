import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import FilmList from '../common-components/film-list/FilmList';
import FilmToolbar from './toolbar/FilmToolbar';
import FilmHeader from './header/FilmHeader';
import NetflixLabel from '../common-components/labels/NetflixLabel';

import * as actions from '../+state/actions/actions';

export class FilmPage extends Component {
	componentDidMount() {
		let filmId = this.props.match.params.filmId;
		this.getPageData(filmId);
	}

	componentWillReceiveProps(nextProps) {
		const nextFilmId = nextProps.match.params.filmId;
		const currentFilmId = this.props.match.params.filmId;
		if (currentFilmId !== nextFilmId) {
			this.getPageData(nextFilmId);
		}
	}

	getPageData(filmId) {
		this.props.getFilmWithSimilar(`https://reactjs-cdp.herokuapp.com/movies/${filmId}`);
	}

	render() {
		let { film, similarFilms } = this.props;
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<div>
						<NetflixLabel />
						<Link to="/">
							<button>Search</button>
						</Link>
					</div>
					<FilmHeader filmInfo={film} />
				</div>
				<div className="panel-body">
					<FilmToolbar genre={film.genre} />
					<FilmList films={similarFilms} />
				</div>
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
	};
};

export default withRouter(connect(mapStateToProps, actions)(FilmPage));
