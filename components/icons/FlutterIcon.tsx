
import React from 'react';

const FlutterIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M14.314 0L6.039 8.275L11.176 13.412L22.588 2H14.314Z" fill="#027DFD"/>
        <path d="M14.314 22L6.039 13.725L11.176 8.588L22.588 20H14.314Z" fill="#027DFD"/>
        <path d="M11.176 13.412L6.039 8.275L1 13.314L11.176 23.49V13.412Z" fill="#2AB5F5"/>
    </svg>
  );
};

export default FlutterIcon;
