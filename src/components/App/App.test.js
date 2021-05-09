import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

// create a test suite using the describe method from jest
// describe takes in a string and a function
// the string is a 'label' for what the test suite is covering, often the system that is under testing itself
// describe('', () => {});
describe('App', () => {
	// test suite
	// it method also from jest, also takes in a label string and a function
	it('App renders without crashing', () => {
		// first test
		// create instance of the component so we can inspect it
		const appWrapper = shallow(<App />);
	});
});
