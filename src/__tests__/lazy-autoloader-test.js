/*global jest, describe, it, expect*/
let React = require('react'),
	ReactDOM = require('react-dom'),
	LazyLoad = require('../LazyLoad.js'),
	TestUtils = require('react-addons-test-utils');

describe('LazyRender', function() {
	function makeComponent(childCount, props) {
		props = props || {};

		let children = [];
		for (let i = 0; i < childCount; i++) {
			children.push(<div className="child" key={i} style={{height: 20}}>{i}</div>);
		}

		let div = document.createElement('div');
		document.body.appendChild(div);
		let component = ReactDOM.render(<LazyLoad maxHeight={200} {...props}>{children}</LazyLoad>, div);

		return component;
	}

	it('renders configurable number of children for padding', function() {
		let lazy = makeComponent(100, {itemPadding:5});

		let renderedChildren = TestUtils.scryRenderedDOMComponentsWithClass(
			lazy, 'child'
		);
		expect(renderedChildren.length).toEqual(15);
	});

	it('renders more children on scrolling', function() {
		let lazy = makeComponent(100, {itemPadding:5});

		let renderedChildren = TestUtils.scryRenderedDOMComponentsWithClass(
			lazy, 'child'
		);
		expect(renderedChildren.length).toEqual(15);
	});

	it('renders all children on autoload', function() {
		let lazy = makeComponent(100, {itemPadding:5});

		let renderedChildren = TestUtils.scryRenderedDOMComponentsWithClass(
			lazy, 'child'
		);
		expect(renderedChildren.length).toEqual(15);
	});

	it('renders nothing when there are no children', function() {
		var childData = [];

		function childGen() {
			return <div>Blank</div>
		}

		let lazy = makeComponent(1, {generatorData: childData, generatorFunction: childGen});

		let renderedChildren = TestUtils.scryRenderedDOMComponentsWithClass(
			lazy, 'child'
		);
		expect(renderedChildren.length).toEqual(1);
	})
});
