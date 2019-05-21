// @flow
import React, { PureComponent } from 'react';
import FilterOption from '../common-components/FilterOption';

type SearchHeaderPropTypes = {
	currentQuery: string,
	handleSearchClick: Function,
	filterOptions: {
		defaultChecked: string,
		filterOptions: Array<{
			name: string
		}>
	}
}
type State = {
	filterOption: string,
	query: string
}
class SearchHeader extends PureComponent<SearchHeaderPropTypes, State> {
	constructor(props: SearchHeaderPropTypes) {
		super(props);
		this.state = {
			filterOption: props.filterOptions.defaultChecked,
			query: props.currentQuery
		};
		(this: any).handleOptionChange = this.handleOptionChange.bind(this);
		(this: any).handleSearchClick = this.handleSearchClick.bind(this);
		(this: any).handleInputChange = this.handleInputChange.bind(this);
		(this: any).keyPress = this.keyPress.bind(this);
	}

	handleSearchClick() {
		let { query, filterOption } = this.state;
		if (query) {
			this.props.handleSearchClick(query, filterOption);
		} else {
			alert('check your query');
		}
	}

	handleOptionChange(checkedOption: string) {
		this.setState({
			filterOption: checkedOption
		});
	}
	handleInputChange(event: SyntheticKeyboardEvent<any>) {
		this.setState({
			query: event.currentTarget.value
		});
	}

	keyPress(event: SyntheticKeyboardEvent<any>) {
		if (event.keyCode == 13) {
			this.handleInputChange(event);
			this.handleSearchClick();
		}
	}

	render() {
		let { filterOptions } = this.props.filterOptions;
		return (
			<div>
				<div className="container">
					<h2> Find your movie </h2>
					<input
						id="searchInput"
						onKeyDown={this.keyPress}
						type="text"
						value={this.state.query}
						onChange={this.handleInputChange}
					/>
				</div>
				<div className="row filterList">
					<div id="filterOptionsContainer">
						<span>Search by</span>
						<ul>
							{filterOptions.map((option) => (
								<li key={option.name}>
									<FilterOption
										checkedOption={this.state.filterOption}
										optionName="filter"
										name={option.name}
										displayName={option.name}
										handleOptionChange={this.handleOptionChange}
									/>
								</li>
							))}
						</ul>
					</div>
					<div>
						<button id="searchButton" className="btn" onClick={this.handleSearchClick}>
							Search
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchHeader;
