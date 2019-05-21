import React, { Component } from 'react';

class ErrorBoundary extends Component {
	static getDerivedStateFromError() {
		return { hasError: true };
	}

	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		console.log(error, info);
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
