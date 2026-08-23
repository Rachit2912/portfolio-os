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
    <header className="h-10 bg-[#040D14]/90 border-b border-[#00F0FF]/30 px-4 flex items-center justify-between text-xs font-mono select-none z-30 backdrop-blur-md">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-2 text-[#00F0FF] font-extrabold text-glow-blue">
          <Shield className="w-4 h-4 text-[#00F0FF]" />
          <span className="hidden sm:inline">RACHIT_OS</span>
        </div>
        <span className="text-[#8DAAC0] hidden sm:inline">|</span>
        <div className="text-[#39FF14] font-semibold flex items-center space-x-1">
          <span className="text-[#00F0FF]">path:</span>
          <span>{currentPath}</span>
        </div>
        <span className="text-[#8DAAC0] hidden md:inline">({activeWorkspace})</span>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex items-center space-x-3 border-r border-[#00F0FF]/20 pr-4">
          {socialLinks.slice(0, 4).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8DAAC0] hover:text-[#00F0FF] transition-colors flex items-center space-x-1 text-[11px]"
              title={link.label}
            >
              <span>{link.name}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-3 text-[#8DAAC0]">
          <div className="hidden md:flex items-center space-x-1 text-[#39FF14] text-[11px] font-bold">
            <Wifi className="w-3.5 h-3.5" />
            <span>ONLINE</span>
          </div>

          <button
            onClick={() => toggleCRT()}
            className={`px-2 py-0.5 rounded border text-[10px] cursor-pointer transition-colors font-bold ${
              crtEnabled
                ? 'bg-[#00F0FF]/15 border-[#00F0FF] text-[#00F0FF] glow-blue-sm'
                : 'bg-[#071520] border-[#8DAAC0]/30 text-[#8DAAC0]'
            }`}
            title="Toggle CRT Overlay"
          >
            CRT: {crtEnabled ? 'ON' : 'OFF'}
          </button>

          <div className="text-[#00F0FF] font-bold tracking-wider text-glow-blue">
            {timeStr || '00:00:00'}
          </div>
        </div>
      </div>
    </header>
  );
};
