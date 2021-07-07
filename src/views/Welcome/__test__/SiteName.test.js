import React from 'react'; // react is needed to test react components
import SiteName from '../SiteName'; // need the component we want to test
import { render } from '@testing-library/react'; // component will be rendered in a virtual dom and tests will be executed there
import '@testing-library/jest-dom/extend-expect';

test('SiteName renders with correct text', () => {
	const component = render(<SiteName />); // redner component we want to test
	const logoTextElement = component.getByTestId('logo-text'); // add data-testid to element in component file

	expect(logoTextElement.textContent).toBe('React Tracker');
});
