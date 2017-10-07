import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';


describe('CommentBox', ()=>{

	var component;

	beforeEach(() => {

		component = renderComponent(CommentBox);
	});

	it('has a correct class name', ()=>{		
		expect(component).to.have.class('comment-box');
	});	

	it('has a text area', ()=>{
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', ()=>{
		expect(component.find('button')).to.exist;
	});	

	describe('entering some text',() => {

		beforeEach(() => {

			component.find('textarea').simulate('change', 'new comment');
		});

		it('shows text that is entered', () => {
			expect(component.find('textarea')).to.have.value('new comment');
		});

		it('when submitted clear the input', () => {
			component.simulate('submit');
			expect(component.find('textarea')).to.have.value('');
		});

	});

	

});