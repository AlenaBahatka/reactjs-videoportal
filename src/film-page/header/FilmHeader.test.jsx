import React from 'react';
import { shallow } from 'enzyme';
import FilmHeader from './FilmHeader';

describe('FilmHeader', () => {
	it('should correctly render component', () => {
		let filmInfo = {
            title: 'Roma',
            director: 'Alfonso Cuarón',
            genre: 'comedy',
            year: 2017,
            coverPicture: 'pic.jpg',
            rating: 8,
            description: 'dddd',
            fullDescription: 'ddddddd',
            duration: 124,
            id: 'id1'
        };
        
        let filmHeaderComponent = shallow(<FilmHeader filmInfo={filmInfo} />);
        
		expect(filmHeaderComponent).toMatchSnapshot();
	});
});
