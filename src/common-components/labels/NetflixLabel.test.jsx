import React from 'react';
import { create } from 'react-test-renderer';
import NetflixLabel from './NetflixLabel';

describe('NetflixLabel', () => {
    it('Netflix label is correct', () => {
        const netflixLabelComponent = create(<NetflixLabel/>);
        expect(netflixLabelComponent.toJSON()).toMatchSnapshot();
    })
});


