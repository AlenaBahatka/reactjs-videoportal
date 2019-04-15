import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilmList from '../common-components/film-list/FilmList';
import FilmToolbar from './toolbar/FilmToolbar';
import FilmHeader from './header/FilmHeader';
import Footer from '../common-components/footer/Footer';
import NetflixLabel from '../common-components/labels/NetflixLabel';

import * as actions from '../+state/actions/actions';

export class FilmPage extends PureComponent {
	componentDidMount() {
		let filmId = 411741; // TODO: should be taken from url later
		this.props.getFilmWithSimilar(`https://reactjs-cdp.herokuapp.com/movies/${filmId}`);
	}

	render() {
		let { film, similarFilms } = this.props;
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<div>
						<NetflixLabel />
						<button>Search</button>
					</div>
					<FilmHeader filmInfo={film} />
				</div>
				<div className="panel-body">
					<FilmToolbar genre={film.genre} />
					<FilmList films={similarFilms} />
				</div>
				<Footer />
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

export default connect(mapStateToProps, actions)(FilmPage);
