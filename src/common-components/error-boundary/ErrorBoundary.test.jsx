import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

let expectedError = new Error('some error');
let ErrorComponentStub = (props) => {
	if (props.throwError) {
		throw expectedError;
	} else {
		return <div>some child component</div>;
	}
};

describe('ErrorBoundary - no errors', () => {
	let errorBoundaryComponent;

	beforeAll(() => {
		errorBoundaryComponent = mount(
			<ErrorBoundary>
				<ErrorComponentStub throwError={false} />
			</ErrorBoundary>
		);
	});

	it('should render a child component correctly', () => {
		expect(errorBoundaryComponent.find('div').exists()).toBeTruthy();
	});
	it('state should not be changed: hasError should be false', () => {
		expect(errorBoundaryComponent.instance().state.hasError).toBeFalsy();
	});
});

describe('ErrorBoundary - an error was caught', () => {
	let errorBoundaryComponent;

	beforeAll(() => {
		jest.spyOn(global.console, 'log');
		errorBoundaryComponent = mount(
			<ErrorBoundary>
				<ErrorComponentStub throwError={true} />
			</ErrorBoundary>
		);
	});

	it('should log an error to console', () => {
		expect(global.console.log).toHaveBeenCalledWith(expectedError, expect.anything());
	});

	it('should update state: hasError should be true', () => {
		expect(errorBoundaryComponent.instance().state.hasError).toBeTruthy();
	});

	it('should NOT render a child component', () => {
		expect(errorBoundaryComponent.find('div').exists()).toBeFalsy();
	});
});
