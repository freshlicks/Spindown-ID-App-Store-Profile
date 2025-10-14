
import React from 'react';

const GooglePlayIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg 
      className={`w-8 h-8 ${className}`}
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#4CAF50" d="M3.75 20.25l11.25-6.75L3.75 3.75z"/>
      <path fill="#F44336" d="M15 13.5L18.75 12 3.75 3.75 7.5 7.5z"/>
      <path fill="#FFC107" d="M15 13.5L7.5 19.5l-3.75-3.75 7.5-3.75z"/>
      <path fill="#2196F3" d="M18.75 12L15 13.5l-7.5-3.75L3.75 20.25z"/>
    </svg>
  );
};

export default GooglePlayIcon;
