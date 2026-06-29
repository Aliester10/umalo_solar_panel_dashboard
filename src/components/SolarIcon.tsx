import React from 'react';

const SolarIcon: React.FC<{ className?: string }> = ({ className = "w-16 h-16 text-solar-primary" }) => {
  return (
    <div className={`relative ${className}`}>
      <img 
        src="/uploads/c4f1f278-3878-43d2-83bb-609604ae3bef.png" 
        alt="Solar Panel Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default SolarIcon;
