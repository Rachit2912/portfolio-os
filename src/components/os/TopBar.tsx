"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Shield, ExternalLink, Wifi } from 'lucide-react';
import { useOSStore } from '@/store/useOSStore';
import { socialLinks } from '@/data/links';

export const TopBar: React.FC = () => {
  const { currentPath, activeWorkspace, crtEnabled, toggleCRT } = useOSStore();
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="h-10 bg-[#07100D]/90 border-b border-[#42F59B]/20 px-4 flex items-center justify-between text-xs font-mono select-none z-30 backdrop-blur-sm">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 text-[#42F59B] font-bold">
          <Shield className="w-4 h-4 text-[#42F59B]" />
          <span className="hidden sm:inline">RACHIT_OS</span>
        </div>
        <span className="text-[#9DB2A8] hidden sm:inline">|</span>
        <div className="text-[#8CFFC5] font-semibold flex items-center space-x-1">
          <span className="text-[#44E8FF]">path:</span>
          <span>{currentPath}</span>
        </div>
        <span className="text-[#9DB2A8] hidden md:inline">({activeWorkspace})</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex items-center space-x-3 border-r border-[#42F59B]/20 pr-4">
          {socialLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9DB2A8] hover:text-[#42F59B] transition-colors flex items-center space-x-1"
              title={link.label}
            >
              <span>{link.name}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3 text-[#9DB2A8]">
          <div className="hidden md:flex items-center space-x-1 text-[#42F59B]">
            <Wifi className="w-3.5 h-3.5" />
            <span>ONLINE</span>
          </div>

          <button
            onClick={() => toggleCRT()}
            className={`px-2 py-0.5 rounded border text-[10px] cursor-pointer transition-colors ${
              crtEnabled
                ? 'bg-[#42F59B]/10 border-[#42F59B] text-[#42F59B]'
                : 'bg-[#0A1411] border-[#9DB2A8]/30 text-[#9DB2A8]'
            }`}
            title="Toggle CRT Overlay"
          >
            CRT: {crtEnabled ? 'ON' : 'OFF'}
          </button>

          <div className="text-[#42F59B] font-bold tracking-wider">
            {timeStr || '00:00:00'}
          </div>
        </div>
      </div>
    </header>
  );
};
