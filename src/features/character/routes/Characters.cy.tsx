import React from 'react';
import { Characters } from './Characters';

describe('<Characters />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Characters />);
	});
});
