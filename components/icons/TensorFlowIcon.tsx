
import React from 'react';

const TensorFlowIcon: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12.012 1.687L22.313 7.938v6.25l-4.701 2.714v-5.428l-5.6-3.232v5.428l-4.688-2.706V7.938l10.288-5.945zM2.813 9.75v6.25l4.688 2.705v-5.428l5.599 3.232v5.428l4.701-2.714v-5.93L12.013 22.5 1.688 16.25V9.75l4.125 2.384L1.688 9.75z"/>
    </svg>
  );
};

export default TensorFlowIcon;
