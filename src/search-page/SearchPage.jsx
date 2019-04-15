import React, { Component } from 'react';
import { connect } from 'react-redux';

import FilmList from '../common-components/film-list/FilmList';
import Footer from '../common-components/footer/Footer';
import NetflixLabel from '../common-components/labels/NetflixLabel';
import SearchHeader from './header/SearchHeader';
import SearchToolbar from './toolbar/SearchToolbar';

import * as actions from '../+state/actions/actions';
import { getSortedFilms } from '../+state/selectors/selectors';

export class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.handleSearchClick = this.handleSearchClick.bind(this);
	}

	handleSearchClick(query, filterOption) {
		if (filterOption === 'genre') {
			filterOption = 'genres';
		}
		this.props.filterFilms(query, filterOption);
		const url = `https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=${filterOption}`;
		this.props.fetchFilms(url);
	}

	componentDidMount() {
		const url = 'http://reactjs-cdp.herokuapp.com/movies';
		this.props.fetchFilms(url);
	}

	render() {
		let { searchedFilms, sortTypes, selectedSortType, filterOptions, sortFilms } = this.props;
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<NetflixLabel />
					<SearchHeader filterOptions={filterOptions} handleSearchClick={this.handleSearchClick} />
				</div>
				<div className="panel-body">
					<SearchToolbar
						numberOfFilms={searchedFilms.length}
						sortTypes={sortTypes}
						selectedSortType={selectedSortType}
						sortHandler={sortFilms}
					/>
					<FilmList films={searchedFilms} />
				</div>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchedFilms: getSortedFilms(state),
		selectedSortType: state.selectedSortType,
		sortTypes: state.sortTypes,
		filterOptions: state.filterOptions
	};
};

export default connect(mapStateToProps, actions)(SearchPage);
