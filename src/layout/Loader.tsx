import { Loader as LoadIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="text-center">
        {/* Animated loader icon */}
        <div className="relative mb-8">
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-teal-600 rounded-full flex items-center justify-center animate-pulse">
            <LoadIcon className="text-white animate-spin" size={32} />
          </div>

          {/* Surrounding animated rings */}
          <div className="absolute inset-0 w-16 h-16 mx-auto border-4 border-orange-200 dark:border-orange-800 rounded-full animate-ping"></div>
          <div className="absolute inset-2 w-12 h-12 mx-auto border-2 border-teal-200 dark:border-teal-800 rounded-full animate-ping delay-75"></div>
        </div>

        {/* Loading text with gradient */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-teal-600 bg-clip-text text-transparent">
            Loading
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we prepare your experience...
          </p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1 mt-6">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-bounce delay-200"></div>
        </div>

        {/* Progress bar simulation */}
        <div className="w-64 mx-auto mt-8">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-teal-600 h-2 rounded-full animate-pulse"
              style={{ width: "70%" }}></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
    </div>
  );
};

export default Loader;
