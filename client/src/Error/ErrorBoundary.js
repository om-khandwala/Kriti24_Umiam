import React, { Component } from "react";
import { Navigate } from "react-router-dom"; // Assuming you're using React Router for navigation

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Error caught by boundary:", error, errorInfo);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasError !== this.state.hasError && this.state.hasError) {
      // Redirect to home page upon encountering an error
      this.setState({ redirect: true });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />; // Redirect to home page
    }

    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. Redirecting...</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
