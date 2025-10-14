import React from 'react';

const CollectionTrackerIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ${className}`}>
      <svg
        xmlns="http://www.w.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    </div>
  );
};

export default CollectionTrackerIcon;
