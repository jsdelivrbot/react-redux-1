import { renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

	let component;

	beforeEach(() => {
		component = renderComponent(CommentBox);
	});

	it('has the correct class', () => {
	    expect(component).to.have.class('comment-box');
	});
	
	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
		
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	describe('entering some text', () => {

		//we can add a beforeEach in this block
		//if we need to do something more specific 
		//for these specs
		beforeEach(() => {
			component.find('textarea').simulate('change', 'new comment');
		});

		//group specs that are closely related into a nested describe
		it('shows text this is entered', () => {
			expect(component).to.have.value('new comment')
		});

		it('when submitted, clears the input', () => {
			
		});
	});
});