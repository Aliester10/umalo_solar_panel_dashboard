import React, { useState, useEffect } from 'react';

const SolarHeader: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      const dateString = now.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
      setCurrentTime(timeString);
      setCurrentDate(dateString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="bg-transparent relative z-20 w-full">
      <div className="max-w-[1400px] mx-auto p-4 md:px-8 md:py-6 flex justify-between items-center w-full gap-2">
        {/* Kiri: Logo */}
        <div className="flex shrink-0 justify-start items-center">
          <img 
            src="/uploads/7b1140d8-b2c5-4b3c-89da-49cd5e78467f.png" 
            alt="Umalo Logo" 
            className="h-8 sm:h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]"
          />
        </div>

        {/* Tengah: Judul */}
        <div className="flex flex-col items-end sm:items-center justify-center flex-1 sm:flex-none">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-sm whitespace-nowrap">Solar Dashboard</h1>
          <div className="hidden md:block text-[11px] text-slate-400 mt-1 uppercase tracking-widest font-medium whitespace-nowrap">Monitoring System • Powered By Umalo</div>
        </div>

        {/* Kanan: Jam dan Tanggal */}
        <div className="hidden sm:flex flex-col items-end justify-center shrink-0">
          <div 
            className="text-2xl md:text-3xl font-bold tracking-tight text-white whitespace-nowrap text-glow"
            style={{ fontFamily: "'Quartz MS Std', 'Digital-7', monospace" }}
          >
            {currentTime}
          </div>
          <div className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest mt-1 whitespace-nowrap">{currentDate}</div>
        </div>
      </div>
    </header>
  );
};

export default SolarHeader;
