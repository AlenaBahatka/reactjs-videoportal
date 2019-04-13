import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchHeader from './SearchHeader';

let searchHeader, handleSearchClickMock, searchHeaderComponent;

describe('SearchHeader', () => {
	beforeEach(() => {
		handleSearchClickMock = jest.fn();
		let filterOptions = {
			filterOptions: [ { name: 'title' }, { name: 'genre' } ],
			defaultChecked: 'title'
		};
		searchHeader = <SearchHeader filterOptions={filterOptions} handleSearchClick={handleSearchClickMock} />;
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should correctly render component', () => {
		searchHeaderComponent = shallow(searchHeader);

		expect(searchHeaderComponent).toMatchSnapshot();
	});

	it('should call handleSearchClick on button click in case query was set', () => {
		searchHeaderComponent = mount(searchHeader);
		searchHeaderComponent.setState({ query: 'a' });
		searchHeaderComponent.find('#searchButton').simulate('click');

		expect(handleSearchClickMock).toBeCalled();
	});

	it('should not call handleSearchClick on button click in case query was not set', () => {
		searchHeaderComponent = mount(searchHeader);
		searchHeaderComponent.find('#searchButton').simulate('click');

		expect(handleSearchClickMock).not.toBeCalled();
	});

	it('should change state on input change', () => {
		const expectedNewValue = 'My new value';
		searchHeaderComponent = mount(searchHeader);
		searchHeaderComponent.find('#searchInput').simulate('change', { target: { value: expectedNewValue } });

		expect(searchHeaderComponent.state().query).toEqual(expectedNewValue);
	});

	it('should call some methods in case Enter was pressed', () => {
		const handleInputChangeSpy = jest.spyOn(SearchHeader.prototype, 'handleInputChange');
		const handleSearchClickSpy = jest.spyOn(SearchHeader.prototype, 'handleSearchClick');
		searchHeaderComponent = mount(searchHeader);

		searchHeaderComponent.find('#searchInput').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13 });

		expect(handleInputChangeSpy).toBeCalled();
		expect(handleSearchClickSpy).toBeCalled();
	});

	it('should call some methods in case Enter was pressed', () => {
		const handleInputChangeSpy = jest.spyOn(SearchHeader.prototype, 'handleInputChange');
		const handleSearchClickSpy = jest.spyOn(SearchHeader.prototype, 'handleSearchClick');
		searchHeaderComponent = mount(searchHeader);

		searchHeaderComponent.find('#searchInput').simulate('keyDown', { key: 'Escape', keyCode: 27, which: '27' });

		expect(handleInputChangeSpy).not.toBeCalled();
		expect(handleSearchClickSpy).not.toBeCalled();
	});

	it('should call handleOptionChange', () => {
		const handleOptionChangeSpy = jest.spyOn(SearchHeader.prototype, 'handleOptionChange');
		searchHeaderComponent = mount(searchHeader);

		searchHeaderComponent.find("input[value='genre']").simulate('change');

		expect(handleOptionChangeSpy).toBeCalled();
	});
});
