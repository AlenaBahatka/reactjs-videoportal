import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FilmList from '../common-components/film-list/FilmList';
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
		this.props.history.push(`/search/${query}`);
		this.filterFilms(query, filterOption);
	}

	filterFilms(query, filterOption) {
		this.props.filterFilms(query, filterOption);
		const url = `https://reactjs-cdp.herokuapp.com/movies?search=${query}&searchBy=${filterOption}`;
		this.props.fetchFilms(url);
	}

	searchWasFired() {
		return this.props.location.pathname.includes('search');
	}

	componentDidMount() {
		const currentQuery = this.props.match.params.query;
		const filterOption = this.props.filterOptions.defaultChecked;
		if (currentQuery) {
			this.filterFilms(currentQuery, filterOption);
		} else {
			this.props.emptySearch();
		}
	}

	render() {
		let { searchedFilms, sortTypes, selectedSortType, filterOptions, sortFilms, query } = this.props;
		
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<NetflixLabel />
					<SearchHeader
						currentQuery={query}
						filterOptions={filterOptions}
						handleSearchClick={this.handleSearchClick}
					/>
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
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		searchedFilms: getSortedFilms(state),
		selectedSortType: state.selectedSortType,
		sortTypes: state.sortTypes,
		filterOptions: state.filterOptions,
		query: state.query
	};
};

export default withRouter(connect(mapStateToProps, actions)(SearchPage));
