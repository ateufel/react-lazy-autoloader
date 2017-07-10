import React from 'react';
import PropTypes from 'prop-types';

let intervalId;

export default class LazyLoad extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			displayEnd: 50,
			loadedChildren: []
		};
	}
	componentDidMount() {
		if (this.props.autoLoad) {
			intervalId = setInterval(this.onLoadMore, this.props.autoLoadInterval);
		} else {
			window.addEventListener('scroll', this.onScroll);
		}
	}
	componentWillUnmount() {
		if (this.props.autoLoad) {
			clearInterval(intervalId);
		} else {
			window.removeEventListener('scroll', this.onScroll);
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			displayEnd: this.props.itemPadding,
			loadedChildren: nextProps.children.slice(0, this.state.displayEnd)
		});
	}
	onLoadMore = () => {
		if (this.state.loadedChildren.length === this.props.children.length) {
			return;
		}
		this.setState({
			loadedChildren: this.props.children.slice(0, this.state.loadedChildren.length + this.props.itemPadding)
		});
	};
	onScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

		let childrenToLoad = this.props.itemPadding + Math.ceil(scrollTop / this.props.childrenHeight);
		childrenToLoad = Math.max(childrenToLoad, this.state.loadedChildren.length);
		childrenToLoad = Math.min(childrenToLoad, this.props.children.length);

		this.setState({
			loadedChildren: this.props.children.slice(0, childrenToLoad)
		});
	};
	render() {
		return (
			<div>
				{this.state.loadedChildren}
			</div>
		);
	}
}

LazyLoad.propTypes = {
	children: PropTypes.array.isRequired,
	autoLoad: PropTypes.bool,
	autoLoadInterval: PropTypes.number,
	itemPadding: PropTypes.number,
	childrenHeight: PropTypes.number
};

LazyLoad.defaultProps = {
	autoLoad: false,
	autoLoadInterval: 100,
	itemPadding: 50,
	childrenHeight: 50
};
