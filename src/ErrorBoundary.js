import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // log the error to an error reporting service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // show fallback UI
      return (
        <div className="ErrorBoundary">
          <h1>Something went wrong</h1>
          <p>Please try again later.</p>
        </div>
      );
    }

    // otherwise, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;
