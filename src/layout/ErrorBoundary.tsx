import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  private handleRefresh = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="text-center px-6 max-w-2xl mx-auto">
            {/* Animated Error Icon */}
            <div className="mb-8">
              <div className="relative">
                <div className="w-32 h-32 mx-auto bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <AlertTriangle className="text-white" size={60} />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 bg-red-200 dark:bg-red-900/30 rounded-full blur-xl animate-ping"></div>
                </div>
              </div>
            </div>

            {/* Broken Wire Animation */}
            <div className="mb-8">
              <div className="flex justify-center items-center gap-2">
                <div className="w-16 h-1 bg-gray-400 rounded animate-pulse"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
                <div className="w-16 h-1 bg-gray-400 rounded animate-pulse delay-300"></div>
              </div>
            </div>

            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Something Went Wrong!
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                Looks like we've encountered a technical difficulty.
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-500">
                Our wires got a bit tangled, but we're working to fix it!
              </p>
            </div>

            {/* Error Details (in development) */}
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mb-8 p-4 bg-red-100 dark:bg-red-900/20 rounded-lg text-left">
                <p className="text-sm text-red-600 dark:text-red-400 font-mono">
                  {this.state.error.message}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={this.handleRefresh}
                className="group px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
                <RefreshCw
                  size={20}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
                Try Again
              </button>

              <button
                onClick={this.handleGoHome}
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-200 flex items-center gap-2">
                <Home size={20} />
                Go Home
              </button>
            </div>

            {/* Floating Animation Elements */}
            <div className="absolute top-20 left-10 w-16 h-16 bg-red-200 dark:bg-red-900/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-20 h-20 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/3 right-20 w-12 h-12 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
