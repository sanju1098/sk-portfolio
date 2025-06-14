import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="text-center px-6 max-w-2xl mx-auto">
        {/* Animated 404 */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-xl animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Animated Search Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-orange-500 to-teal-600 rounded-full flex items-center justify-center animate-bounce">
            <Search className="text-white" size={40} />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            The page you're looking for seems to have wandered off into the
            digital void.
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-500">
            Don't worry, it happens to the best of us!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-teal-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
            <Home size={20} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-200 flex items-center gap-2">
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-orange-200 dark:bg-orange-900/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-teal-200 dark:bg-teal-900/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-20 w-12 h-12 bg-purple-200 dark:bg-purple-900/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default NotFound;
