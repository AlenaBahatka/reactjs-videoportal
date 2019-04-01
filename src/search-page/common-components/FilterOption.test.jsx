import React from 'react';
import { shallow, mount } from 'enzyme';
import FilterOption from './FilterOption';

let handleOptionChangeMock, filmPageComponent, filterOption;

describe('FilterOption', () => {
	beforeAll(() => {
		handleOptionChangeMock = jest.fn();
		filterOption = (
			<FilterOption
				optionName="title"
				checkedOption="title"
				displayName="title"
				name="title"
				handleOptionChange={handleOptionChangeMock}
			/>
		);
	});

	it('should correctly render component', () => {
		filmPageComponent = shallow(filterOption);
		expect(filmPageComponent).toMatchSnapshot();
	});

	it('should call method on event change', () => {
		filmPageComponent = mount(filterOption);

		filmPageComponent.find('input').simulate('change');

		expect(handleOptionChangeMock).toBeCalled();
	});
});
