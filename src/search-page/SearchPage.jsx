import React, { Component } from 'react';

import FilmList from '../common-components/film-list/FilmList';
import Footer from '../common-components/footer/Footer';
import NetflixLabel from '../common-components/labels/NetflixLabel';
import SearchHeader from './header/SearchHeader';
import SearchToolbar from './toolbar/SearchToolbar';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterOptions: {
                filterOptions: [
                    {name: 'title'},
                    {name: 'genre'}
                ],
                defaultChecked: 'title'
            },
            films: this.props.films,
            searchedFilms: this.props.films,
            sortTypes: [
                {
                    id: 'releaseDate',
                    displayName: 'release date',
                },
                {
                    id: 'rating',
                    displayName: 'rating',
                }
            ],
            selectedSortType: 'releaseDate'
        }
        this.sortFilms = this.sortFilms.bind(this);
        this.handleSearchClick = this.handleSearchClick.bind(this);
    }

    sortFilms(sortOption) {
        let sortedFilms;
        switch (sortOption) {
            case 'releaseDate':
                sortedFilms = this.state.searchedFilms.sort((a, b) => (a.year > b.year) ? 1 : ((b.year > a.year) ? -1 : 0));
                break;
            case 'rating':
                sortedFilms = this.state.searchedFilms.sort((a, b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0));
                break;
        }
       this.setState({
            searchedFilms: sortedFilms
       })
    }

    handleSearchClick(query, filterOption) {
        let foundFilms = this.state.films.filter((film) => film[filterOption].toLowerCase().indexOf(query.toLowerCase()) != -1);
        this.setState({
            searchedFilms: foundFilms
        })
    }

    componentDidMount() {
        this.sortFilms(this.state.selectedSortType);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div  className="panel-heading">
                    <NetflixLabel/>
                    <SearchHeader filterOptions={this.state.filterOptions} handleSearchClick={this.handleSearchClick}></SearchHeader>
                </div>
                <div className="panel-body">
                    <SearchToolbar 
                        numberOfFilms={this.state.searchedFilms.length}
                        sortTypes={this.state.sortTypes} 
                        selectedSortType={this.state.selectedSortType}
                        sortHandler={this.sortFilms}>
                    </SearchToolbar>
                    <FilmList films={this.state.searchedFilms}></FilmList>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SearchPage;