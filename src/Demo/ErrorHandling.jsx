import React, { Component } from 'react'

export default class ErrorHandling extends Component {
  compute = () => {
    try {
      throw "CUSTOM_ERROR"
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { string } = this.props;
    return (
      <ErrBoundary>
        <div>ErrorHandling = {string}</div>
      </ErrBoundary>
    )
  }
}

class ErrBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    console.log("error", error);
    return { hasError: !!error }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error: errorInfo.componentStack })
  }
  render() {
    // console.log(this.state);
    if (this.state.hasError) {
      return (
        <>
          <div>Something went wrong!</div>
          <pre>{this.state.error}</pre>
        </>
      )
    }
    return this.props.children;
  }
}
