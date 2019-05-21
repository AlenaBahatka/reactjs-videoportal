// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import FilmList from '../common-components/film-list/FilmList';
import NetflixLabel from '../common-components/labels/NetflixLabel';
import SearchHeader from './header/SearchHeader';
import SearchToolbar from './toolbar/SearchToolbar';

import * as actions from '../+state/actions/actions';
import getSortedFilms from '../+state/selectors/selectors';

type matchType = {
	params: {
		query?: string
	}
}
type SearchPagePropTypes = {
	match: matchType,
	filterOptions: {
		defaultChecked: string,
		filterOptions: Array<{
			name: string
		}>
	},
	searchedFilms: [{
		title: string,
		director: string,
		year: number,
		coverPicture: string,
		id: number
	}],
	sortTypes: Array<any>, 
	selectedSortType: string, 
	sortFilms: Function, 
	query: string, 
	emptySearch: Function,
	filterFilms: Function,
	fetchFilms: Function,
	history: Array<any> 
}
export class SearchPage extends Component<SearchPagePropTypes> {
	constructor(props: SearchPagePropTypes) {
		super(props);
		(this: any).handleSearchClick = this.handleSearchClick.bind(this);
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

	handleSearchClick(query: string, filterOption: string) {
		if (filterOption === 'genre') {
			filterOption = 'genres';
		}
		this.props.history.push(`/search/${query}`);
		this.filterFilms(query, filterOption);
	}

	filterFilms(query: string, filterOption: string) {
		this.props.filterFilms(query, filterOption);
		this.props.fetchFilms(query, filterOption);
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
		searchedFilms: getSortedFilms(state.filmsReducer),
		selectedSortType: state.filmsReducer.selectedSortType,
		sortTypes: state.filmsReducer.sortTypes,
		filterOptions: state.filmsReducer.filterOptions,
		query: state.filmsReducer.query
	};
};

export default withRouter(connect(mapStateToProps, actions)(SearchPage));
