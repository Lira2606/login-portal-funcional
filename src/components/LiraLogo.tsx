
import React from 'react';

const LiraLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="bg-[#1DE9B6] w-12 h-12 rounded-xl flex items-center justify-center mb-3">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9 18V5l12-2v13" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path 
            d="M21 16C22.6569 16 24 14.6569 24 13C24 11.3431 22.6569 10 21 10C19.3431 10 18 11.3431 18 13C18 14.6569 19.3431 16 21 16Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className="text-[#1DE9B6] text-lg font-medium">Bem-vindo à Lira Music</h1>
    </div>
  );
};

export default LiraLogo;
