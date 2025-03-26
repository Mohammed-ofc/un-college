
import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-primary/20"></div>
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-gradient">Loading UNAI...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
