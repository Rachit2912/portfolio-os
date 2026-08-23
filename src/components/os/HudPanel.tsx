"use client";

import React from 'react';
import { Cpu, Award, Code2, ExternalLink, Activity } from 'lucide-react';
import { profileData } from '@/data/profile';
import { useOSStore } from '@/store/useOSStore';

export const HudPanel: React.FC = () => {
  const { setActiveWorkspace, setSelectedProjectSlug } = useOSStore();

  return (
    <aside className="w-80 bg-[#07100D]/80 border-l border-[#42F59B]/20 p-4 hidden xl:flex flex-col space-y-5 text-xs font-mono overflow-y-auto z-20">
      <div className="os-panel p-3.5 space-y-2 border-[#42F59B]/30">
        <div className="flex items-center justify-between text-[#42F59B] border-b border-[#42F59B]/20 pb-2">
          <div className="flex items-center space-x-2 font-bold">
            <Cpu className="w-4 h-4 text-[#42F59B]" />
            <span>ENGINEER PROFILE</span>
          </div>
          <span className="text-[10px] bg-[#42F59B]/10 px-1.5 py-0.5 rounded text-[#42F59B]">LIVE</span>
        </div>

        <div className="space-y-1.5 pt-1 text-[#F1F7F3]">
          <div><span className="text-[#9DB2A8]">NAME:</span> {profileData.name}</div>
          <div><span className="text-[#9DB2A8]">DEGREE:</span> VIT B.Tech IT</div>
          <div><span className="text-[#9DB2A8]">GPA:</span> {profileData.education.gpa}</div>
          <div><span className="text-[#9DB2A8]">CURRENT:</span> Hitwicket SDE Intern</div>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2 border-[#44E8FF]/30">
        <div className="flex items-center space-x-2 text-[#44E8FF] border-b border-[#44E8FF]/20 pb-2 font-bold">
          <Activity className="w-4 h-4" />
          <span>PRODUCTION IMPACT</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
          <div className="bg-[#050A08] p-2 rounded border border-[#42F59B]/20 text-center">
            <div className="text-[#42F59B] font-bold text-sm">+49%</div>
            <div className="text-[#9DB2A8] text-[9px]">Payer Conv.</div>
          </div>
          <div className="bg-[#050A08] p-2 rounded border border-[#42F59B]/20 text-center">
            <div className="text-[#42F59B] font-bold text-sm">+52%</div>
            <div className="text-[#9DB2A8] text-[9px]">Sales Impact</div>
          </div>
          <div className="bg-[#050A08] p-2 rounded border border-[#44E8FF]/20 text-center">
            <div className="text-[#44E8FF] font-bold text-sm">30s → 10s</div>
            <div className="text-[#9DB2A8] text-[9px]">SLT Exec</div>
          </div>
          <div className="bg-[#050A08] p-2 rounded border border-[#44E8FF]/20 text-center">
            <div className="text-[#44E8FF] font-bold text-sm">+$100/d</div>
            <div className="text-[#9DB2A8] text-[9px]">Ad Revenue</div>
          </div>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2.5 border-[#42F59B]/20">
        <div className="flex items-center justify-between text-[#42F59B] border-b border-[#42F59B]/20 pb-2 font-bold">
          <div className="flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-[#42F59B]" />
            <span>FEATURED SYSTEMS</span>
          </div>
          <button
            onClick={() => setActiveWorkspace('projects')}
            className="text-[10px] text-[#44E8FF] hover:underline cursor-pointer"
          >
            view all
          </button>
        </div>

        <div className="space-y-2 text-[11px]">
          <button
            onClick={() => { setSelectedProjectSlug('secure-file-vault'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#050A08] hover:bg-[#0A1411] p-2 rounded border border-[#42F59B]/20 transition-all cursor-pointer group"
          >
            <div className="text-[#F1F7F3] font-semibold group-hover:text-[#42F59B] flex items-center justify-between">
              <span>Secure File Vault</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#9DB2A8] text-[10px]">Go + React + PostgreSQL</div>
          </button>

          <button
            onClick={() => { setSelectedProjectSlug('shellb'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#050A08] hover:bg-[#0A1411] p-2 rounded border border-[#42F59B]/20 transition-all cursor-pointer group"
          >
            <div className="text-[#F1F7F3] font-semibold group-hover:text-[#42F59B] flex items-center justify-between">
              <span>shellB Shell</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#9DB2A8] text-[10px]">C++ Unix REPL + POSIX</div>
          </button>

          <button
            onClick={() => { setSelectedProjectSlug('deribit-oems'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#050A08] hover:bg-[#0A1411] p-2 rounded border border-[#42F59B]/20 transition-all cursor-pointer group"
          >
            <div className="text-[#F1F7F3] font-semibold group-hover:text-[#42F59B] flex items-center justify-between">
              <span>Deribit OEMS</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#9DB2A8] text-[10px]">C++20 + Boost.Beast</div>
          </button>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2 border-[#A66CFF]/30">
        <div className="flex items-center space-x-2 text-[#A66CFF] border-b border-[#A66CFF]/20 pb-2 font-bold">
          <Award className="w-4 h-4" />
          <span>VERIFIED BADGES</span>
        </div>

        <div className="space-y-1.5 pt-1 text-[11px] text-[#F1F7F3]">
          <div className="flex justify-between items-center">
            <span>AWS SAA</span>
            <span className="text-[#42F59B] font-bold">Certified</span>
          </div>
          <div className="flex justify-between items-center">
            <span>LeetCode Contest</span>
            <span className="text-[#44E8FF] font-bold">#408</span>
          </div>
          <div className="flex justify-between items-center">
            <span>CodeChef</span>
            <span className="text-[#A66CFF] font-bold">Top 14%</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
