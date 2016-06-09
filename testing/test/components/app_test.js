import { renderComponent, expect } from '..//test_helper';
import App from '../../src/components/app';

// Use 'descrive' to group together similiar tests
describe('App', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	// Use 'it' to test a single attribute of a target
	it('it shows a comment box', () => {
		expect(component.find('.comment-box')).to.exist;
	});
}) ;

//We want to test the end product not the internal methods of the app