"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, UserCheck, ExternalLink, Wifi, LogOut, LayoutGrid } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';
import { socialLinks } from '@/data/links';
import { StartMenuModal } from './StartMenuModal';

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
      setDateStr(`${datePart} (GST)`);
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

        <div className="flex items-center space-x-2 text-[#39FF14] font-extrabold text-glow-green">
          <UserCheck className="w-4.5 h-4.5 text-[#39FF14]" />
          <span className="hidden sm:inline tracking-wider">RACHIT_PORTFOLIO_OS</span>
        </div>
        <span className="text-[#70A080] hidden sm:inline">|</span>
        <div className="text-[#00FF66] font-semibold flex items-center space-x-1">
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
          <div className="hidden md:flex items-center space-x-1 text-[#39FF14] text-[11px] font-bold">
            <Wifi className="w-3.5 h-3.5" />
            <span>ONLINE</span>
          </div>

          <div className="text-[#00FF66] font-bold tracking-wider text-glow-green flex items-center space-x-2">
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
