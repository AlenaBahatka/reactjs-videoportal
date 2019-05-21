// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import FilmList from '../common-components/film-list/FilmList';
import FilmToolbar from './toolbar/FilmToolbar';
import FilmHeader from './header/FilmHeader';
import NetflixLabel from '../common-components/labels/NetflixLabel';

import * as actions from '../+state/actions/actions';
import type {FilmFlowtype} from '../flowtypes/commonFlowtypes';

type matchPtops = {
	params: {
		filmId: number
	}
};
type FilmPageProps = {
	match: matchPtops,
	film: FilmFlowtype,
	getFilmWithSimilar: Function,
	similarFilms: [{
		title: string,
		director: string,
		year: number,
		coverPicture: string,
		id: number
	}]
}
export class FilmPage extends Component<FilmPageProps> {
	componentDidMount() {
		let filmId = this.props.match.params.filmId;
		this.getPageData(filmId);
	}

	componentWillReceiveProps(nextProps: {match: matchPtops}) {
		const nextFilmId = nextProps.match.params.filmId;
		const currentFilmId = this.props.match.params.filmId;
		if (currentFilmId !== nextFilmId) {
			this.getPageData(nextFilmId);
		}
	}

	getPageData(filmId: number) {
		this.props.getFilmWithSimilar(filmId);
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

const mapStateToProps = (state) => {
	return {
		film: state.filmsReducer.selectedFilm,
		similarFilms: state.filmsReducer.similarFilms
	};
};

export default withRouter(connect(mapStateToProps, actions)(FilmPage));
