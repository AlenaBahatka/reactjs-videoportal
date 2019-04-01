import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchToolbar from './SearchToolbar';

let sortTypes = [
	{
		id: 'releaseDate',
		displayName: 'release date'
	},
	{
		id: 'rating',
		displayName: 'rating'
	}
];
let selectedSortType = 'releaseDate';
let searchToolbar, sortHandlerMock;
describe('SearchToolbar', () => {
	beforeEach(() => {
		sortHandlerMock = jest.fn();

		searchToolbar = (
			<SearchToolbar
				sortTypes={sortTypes}
				selectedSortType={selectedSortType}
				numberOfFilms={1}
				sortHandler={sortHandlerMock}
			/>
		);
	});

	it('should correctly render component in case one film', () => {
		let searchToolbarComponent = shallow(searchToolbar);
		expect(searchToolbarComponent).toMatchSnapshot();
	});

	it('should correctly render component in case some films', () => {
		searchToolbar = (
			<SearchToolbar
				sortTypes={sortTypes}
				selectedSortType={selectedSortType}
				numberOfFilms={3}
				sortHandler={sortHandlerMock}
			/>
		);
		let searchToolbarComponent = shallow(searchToolbar);
		expect(searchToolbarComponent).toMatchSnapshot();
	});

	it('should call sort handler', () => {
		let searchToolbarComponent = mount(searchToolbar);

		searchToolbarComponent.find("input[value='rating']").simulate('change');

		expect(sortHandlerMock).toBeCalled();
	});
});
