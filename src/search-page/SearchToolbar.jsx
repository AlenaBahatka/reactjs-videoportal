import React, { PureComponent } from 'react';
import FilterOption from './FilterOption';

class SearchToolbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sortTypes: this.props.sortTypes,
            selectedSortType: this.props.selectedSortType,
            numberOfFilms: this.props.numberOfFilms
        }
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(checkedOption) {
        this.setState({
            selectedSortType: checkedOption
        });
        this.props.sortHandler(checkedOption);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-sm-9">{this.state.numberOfFilms} movies found</div>
                <div className="col-sm-3">Sort by
                    <div className="btn-group btn-group-lg">
                        {this.state.sortTypes.map((sortType) => 
                            <FilterOption 
                                checkedOption={this.state.selectedSortType} 
                                name={sortType.id}
                                displayName={sortType.displayName}
                                handleOptionChange={this.handleOptionChange}
                                optionName='sort'
                                key={sortType.id}>
                            </FilterOption>
                        )}
                    </div>
                </div>                            
            </div>
        );
    }
}

export default SearchToolbar;