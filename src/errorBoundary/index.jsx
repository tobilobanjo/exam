import React from 'react';
import "./style.css";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error boundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div class="error">
      <h6>🎭</h6>
      <h3>Something went wrong.</h3>
      <Link to="/">
        <div class="homeButton">
        <p>Go Home</p>
        </div>
      </Link>
    </div>
    }

    return this.props.children;
  }
}
