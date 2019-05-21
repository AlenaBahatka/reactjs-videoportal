// @flow
import type {FilmFlowtype} from './commonFlowtypes';

type filterOptionFlowtype = { +name: string };

type sortTypeFlowtype = {
    +id: string,
    +displayName: string
};

export type StoreFlowtype = {
	+filterOptions: {
		+filterOptions: Array<filterOptionFlowtype>,
		+defaultChecked: string
	},
	+searchedFilms: Array<FilmFlowtype>,
	+sortTypes: Array<sortTypeFlowtype>,
	+selectedSortType: string,
	+selectedFilm: FilmFlowtype | {},
	+similarFilms: Array<FilmFlowtype>,
	+query: string
};
