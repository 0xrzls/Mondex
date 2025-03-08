import React from "react";
import * as Sentry from "@sentry/react";

class SentryErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops! Terjadi kesalahan.</h1>;
    }

    return this.props.children;
  }
}

export default SentryErrorBoundary;
