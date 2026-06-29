import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit: string;
  icon: LucideIcon;
  gradient?: string;
  subtitle?: string;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  unit, 
  icon: Icon,
  gradient = "from-emerald-400 to-cyan-500",
  subtitle,
  className = ""
}) => {
  return (
    <div className={`glass-panel p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group ${className}`}>
      {/* Decorative gradient blob */}
      <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${gradient} rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500`}></div>
      
      <div className="flex justify-between items-start mb-2 sm:mb-4">
        <h3 className="text-xs sm:text-sm font-medium text-slate-300 tracking-wide uppercase">{title}</h3>
        <div className={`p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 text-white shrink-0 ml-2`}>
          <Icon className="w-5 h-5 opacity-80" />
        </div>
      </div>
      
      <div className="mt-1 sm:mt-2 flex items-baseline space-x-1 sm:space-x-2">
        <span 
          className={`text-4xl sm:text-5xl lg:text-6xl metric-value bg-gradient-to-br ${gradient} bg-clip-text text-transparent text-glow`}
          style={{ fontFamily: "'Quartz MS Std', 'Digital-7', monospace" }}
        >
          {value}
        </span>
        <span className="text-sm sm:text-lg font-medium text-slate-400">{unit}</span>
      </div>
      
      {subtitle && (
        <p className="text-[10px] sm:text-xs text-slate-500 mt-2 sm:mt-4">{subtitle}</p>
      )}
    </div>
  );
};

export default MetricCard;
