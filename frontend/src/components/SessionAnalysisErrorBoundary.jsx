import React from "react";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router";

class SessionAnalysisErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMessage: error?.message || "Unexpected error occurred.",
    };
  }

  componentDidCatch(error, info) {
    console.error("SessionAnalysisErrorBoundary caught error:", error, info);
  }

  handleRetry = () => {
    this.setState({ hasError: false, errorMessage: "" });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-6">
          <div className="max-w-lg w-full bg-base-100 border border-base-300 rounded-2xl p-8 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-error/10 mx-auto flex items-center justify-center mb-4">
              <AlertTriangle className="w-7 h-7 text-error" />
            </div>

            <h2 className="text-2xl font-bold mb-2">Analysis Page Crashed</h2>
            <p className="text-sm text-base-content/70 mb-2">
              Something went wrong while loading this analysis page.
            </p>
            <p className="text-xs text-base-content/50 mb-6 break-all">
              {this.state.errorMessage}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button className="btn btn-primary" onClick={this.handleRetry}>
                Try Again
              </button>
              <Link to="/dashboard" className="btn btn-ghost">
                Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SessionAnalysisErrorBoundary;
