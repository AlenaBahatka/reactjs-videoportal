import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FilterOption from '../common-components/FilterOption';

class SearchHeader extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			filterOption: props.filterOptions.defaultChecked,
			query: ''
		};
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleSearchClick = this.handleSearchClick.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.keyPress = this.keyPress.bind(this);
	}

	handleSearchClick() {
		let { query, filterOption } = this.state;
		if (query) {
			this.props.handleSearchClick(query, filterOption);
		} else {
			alert('check your query');
		}
		// TODO: remove later. just for logging
		console.log('run search with filter =', this.state.filterOption, '& search query = ', this.state.query);
	}

	handleOptionChange(checkedOption) {
		this.setState({
			filterOption: checkedOption
		});
	}
	handleInputChange(event) {
		this.setState({
			query: event.target.value
		});
	}

	keyPress(event) {
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
							{filterOptions.map((option, i) => (
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

SearchHeader.propTypes = {
	filterOptions: PropTypes.object
};

export default SearchHeader;
