"use client";

import React, { useState, useEffect } from 'react';
import { ExternalLink, Wifi, LogOut, LayoutGrid, Terminal, Cpu, ShieldAlert } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';
import { socialLinks } from '@/data/links';
import { StartMenuModal } from './StartMenuModal';

// Arch Linux SVG Icon Component
const ArchLinuxIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 300 300" fill="currentColor">
    <path d="M141.3 22.4c-3 6.9-9.1 20.3-15.3 33.9-19.1 41.7-37.1 81.3-58.4 127.3-19.7 42.5-39 84.1-41.9 90.3l-5.3 11.3 11.2-6.5c10-5.8 21.8-11.2 31.7-14.7 18.8-6.6 37.3-9.7 58-9.7 13.6 0 22.8 1.2 34.5 4.5l5.2 1.5-3.6 5.8c-12 19.3-19.6 37.3-21.9 51.8-1 6.5-.5 11.1 1.6 14.5 2 3.3 6.8 5 13.8 5 9.7 0 22.2-3.8 38.2-11.7 15.6-7.7 32-18.9 47.9-32.8 2.2-1.9 4.2-3.5 4.5-3.5.3 0 2.3 1.6 4.5 3.5 15.9 13.9 32.3 25.1 47.9 32.8 16 7.9 28.5 11.7 38.2 11.7 7 0 11.8-1.7 13.8-5 2.1-3.4 2.6-8 1.6-14.5-2.3-14.5-9.9-32.5-21.9-51.8l-3.6-5.8 5.2-1.5c11.7-3.3 20.9-4.5 34.5-4.5 20.7 0 39.2 3.1 58 9.7 9.9 3.5 21.7 8.9 31.7 14.7l11.2 6.5-5.3-11.3c-2.9-6.2-22.2-47.8-41.9-90.3-21.3-46-39.3-85.6-58.4-127.3-6.2-13.6-12.3-27-15.3-33.9l-5.5-12.4H146.8l-5.5 12.4z"/>
  </svg>
);

export const TopBar: React.FC = () => {
  const { currentPath, activeWorkspace, themeColor, logout } = useOSStore();
  const [timeStr, setTimeStr] = useState<string>('');
  const [dateStr, setDateStr] = useState<string>('');
  const [startOpen, setStartOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const datePart = now.toISOString().split('T')[0];
      const timePart = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setDateStr(datePart);
      setTimeStr(timePart);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-10 bg-[#05140A]/90 border-b border-[#39FF14]/30 px-4 flex items-center justify-between text-xs font-mono select-none z-30 backdrop-blur-md">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setStartOpen(true)}
          style={{ backgroundColor: themeColor, color: '#020904' }}
          className="px-2.5 py-1 font-extrabold rounded flex items-center space-x-1.5 transition-all cursor-pointer glow-green-sm text-xs shrink-0"
        >
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>START</span>
        </button>

        <div className="flex items-center space-x-2 text-theme font-extrabold text-glow-green" title="Arch Linux / RachitOS Kernel">
          <ArchLinuxIcon className="w-4.5 h-4.5 text-theme" />
          <span className="hidden sm:inline tracking-wider">RACHIT_PORTFOLIO_OS</span>
        </div>
        <span className="text-[#70A080] hidden sm:inline">|</span>
        <div className="text-theme font-semibold flex items-center space-x-1">
          <span className="text-[#70A080]">path:</span>
          <span>{currentPath}</span>
        </div>
        <span className="text-[#70A080] hidden md:inline">({activeWorkspace})</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex items-center space-x-3 border-r border-[#39FF14]/20 pr-4">
          {socialLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#70A080] hover:text-[#39FF14] transition-colors flex items-center space-x-1 text-[11px]"
              title={link.label}
            >
              <span>{link.name}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3 text-[#70A080]">
          <div className="hidden md:flex items-center space-x-1 text-theme text-[11px] font-bold">
            <Wifi className="w-3.5 h-3.5" />
            <span>ONLINE</span>
          </div>

          <div className="text-theme font-bold tracking-wider text-glow-green flex items-center space-x-2">
            <span className="text-[#70A080] text-[10px] hidden xl:inline">{dateStr}</span>
            <span>{timeStr || '00:00:00'}</span>
          </div>

          <button
            onClick={() => logout("USER LOGGED OUT. SESSION TERMINATED.")}
            className="p-1.5 rounded bg-[#FF2A55]/15 border border-[#FF2A55]/60 text-[#FF2A55] hover:bg-[#FF2A55] hover:text-[#000] transition-all cursor-pointer flex items-center space-x-1 text-[11px] font-bold"
            title="Logout / System Shutdown"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">LOGOUT</span>
          </button>
        </div>
      </div>

      <StartMenuModal isOpen={startOpen} onClose={() => setStartOpen(false)} />
    </header>
  );
};
