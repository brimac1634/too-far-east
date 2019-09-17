import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasErrored: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true }
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return <div>Please check your internet connection</div>
		} 
		return this.props.children
	}
} 

export default ErrorBoundary;