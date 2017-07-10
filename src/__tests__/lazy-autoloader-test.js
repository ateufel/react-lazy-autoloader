/*global jest, describe, it, expect*/
import React from 'react';
import {mount} from 'enzyme';
import LazyLoad from '../LazyLoad.js';

describe('LazyLoad', () => {
	const makeChildren = (childCount) => {
		let children = [];
		for (let i = 0; i < childCount; i++) {
			children.push(<div className="child" key={i} style={{height: 20}}>{i}</div>);
		}
		return children;
	};

	it('renders all children on autoload', (done) => {
		let children = makeChildren(100);

		const onFinished = () => {
			expect(component.instance().props.onLoadFinished).toBeDefined();
			expect(component.instance().state.loadedChildren.length).toEqual(100);
			expect(component.children().length).toEqual(100);
			done();
		};
		const component = mount(<LazyLoad onLoadFinished={onFinished} autoLoad={true}>{children}</LazyLoad>);
	});

	it('renders more children on scrolling', (done) => {
		let children = makeChildren(100);

		const onFinished = () => {
			expect(component.instance().props.onLoadFinished).toBeDefined();
			expect(component.instance().state.loadedChildren.length).toEqual(100);
			expect(component.children().length).toEqual(100);
			done();
		};
		const component = mount(<LazyLoad onLoadFinished={onFinished}>{children}</LazyLoad>);

		//TODO scroll until onFinished gets called
		//TestUtils.Simulate.scroll(footer.getDOMNode(), {deltaY: 500});
		//document.body.scrollTop = 100;
		//window.dispatchEvent(new window.UIEvent('scroll', {detail: 0}));
	});

	it('renders nothing when there are no children', () => {

	})
});
