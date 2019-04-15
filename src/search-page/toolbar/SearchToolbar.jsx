import React, { PureComponent } from 'react';
import FilterOption from '../common-components/FilterOption';

class SearchToolbar extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			sortTypes: this.props.sortTypes,
			selectedSortType: this.props.selectedSortType
		};
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(checkedOption) {
		this.setState({
			selectedSortType: checkedOption
		});
		this.props.sortHandler(checkedOption);
	}

	render() {
		const numberOfFilms = this.props.numberOfFilms;
		const movieWord = numberOfFilms === 1 ? 'movie' : 'movies';
		return (
			<div className="row">
				<div className="col-sm-9">
					{this.props.numberOfFilms} {movieWord} found
				</div>
				<div className="col-sm-3">
					Sort by
					<div className="btn-group btn-group-lg">
						{this.state.sortTypes.map((sortType) => (
							<FilterOption
								checkedOption={this.state.selectedSortType}
								name={sortType.id}
								displayName={sortType.displayName}
								handleOptionChange={this.handleOptionChange}
								optionName="sort"
								key={sortType.id}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}


export default SearchToolbar;
