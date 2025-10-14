import React from 'react';

const WishlistTradesIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10h4l-2 2-2-2zM8 14H4l2-2 2 2z" />
      </svg>
    </div>
  );
};

export default WishlistTradesIcon;
