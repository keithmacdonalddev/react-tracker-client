import React from 'react';
import HeaderText from '../HeaderText';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('HeaderText renders with correct text', () => {
	const component = render(<HeaderText />);
	const headerTextElement = component.getByTestId('header-text');

	expect(headerTextElement.textContent).toBe('Portfolio tools designed for aspiring software engineers');
});
