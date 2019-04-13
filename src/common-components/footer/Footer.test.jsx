import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
	it('Footer is rendered correctly', () => {
		const footerComponent = shallow(<Footer />);
		expect(footerComponent).toMatchSnapshot();
	});
});
