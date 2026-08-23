"use client";

import React from 'react';
import { Cpu, Award, Code2, ExternalLink, Activity } from 'lucide-react';
import { profileData } from '@/data/profile';
import { useOSStore } from '@/store/useOSStore';

export const HudPanel: React.FC = () => {
  const { setActiveWorkspace, setSelectedProjectSlug } = useOSStore();

  return (
    <aside className="w-80 bg-[#040D14]/90 border-l border-[#00F0FF]/30 p-4 hidden xl:flex flex-col space-y-5 text-xs font-mono overflow-y-auto z-20">
      <div className="os-panel p-3.5 space-y-2 border-[#00F0FF]/40 glow-blue-sm">
        <div className="flex items-center justify-between text-[#00F0FF] border-b border-[#00F0FF]/30 pb-2">
          <div className="flex items-center space-x-2 font-bold text-glow-blue">
            <Cpu className="w-4 h-4 text-[#00F0FF]" />
            <span>ENGINEER PROFILE</span>
          </div>
          <span className="text-[10px] bg-[#00F0FF]/15 border border-[#00F0FF]/40 px-1.5 py-0.5 rounded text-[#00F0FF] font-bold">LIVE</span>
        </div>

        <div className="space-y-1.5 pt-1 text-[#F0F8FF]">
          <div><span className="text-[#8DAAC0]">NAME:</span> {profileData.name}</div>
          <div><span className="text-[#8DAAC0]">DEGREE:</span> VIT B.Tech IT</div>
          <div><span className="text-[#8DAAC0]">GPA:</span> {profileData.education.gpa}</div>
          <div><span className="text-[#8DAAC0]">CURRENT:</span> Hitwicket SDE Intern</div>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2 border-[#39FF14]/40">
        <div className="flex items-center space-x-2 text-[#39FF14] border-b border-[#39FF14]/30 pb-2 font-bold text-glow-green">
          <Activity className="w-4 h-4" />
          <span>PRODUCTION IMPACT</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
          <div className="bg-[#020A0F] p-2 rounded border border-[#39FF14]/30 text-center">
            <div className="text-[#39FF14] font-bold text-sm">+49%</div>
            <div className="text-[#8DAAC0] text-[9px]">Payer Conv.</div>
          </div>
          <div className="bg-[#020A0F] p-2 rounded border border-[#39FF14]/30 text-center">
            <div className="text-[#39FF14] font-bold text-sm">+52%</div>
            <div className="text-[#8DAAC0] text-[9px]">Sales Impact</div>
          </div>
          <div className="bg-[#020A0F] p-2 rounded border border-[#00F0FF]/30 text-center">
            <div className="text-[#00F0FF] font-bold text-sm">30s → 10s</div>
            <div className="text-[#8DAAC0] text-[9px]">SLT Exec</div>
          </div>
          <div className="bg-[#020A0F] p-2 rounded border border-[#00F0FF]/30 text-center">
            <div className="text-[#00F0FF] font-bold text-sm">+$100/d</div>
            <div className="text-[#8DAAC0] text-[9px]">Ad Revenue</div>
          </div>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2.5 border-[#00F0FF]/30">
        <div className="flex items-center justify-between text-[#00F0FF] border-b border-[#00F0FF]/30 pb-2 font-bold">
          <div className="flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-[#00F0FF]" />
            <span>FEATURED SYSTEMS</span>
          </div>
          <button
            onClick={() => setActiveWorkspace('projects')}
            className="text-[10px] text-[#00F0FF] hover:underline cursor-pointer"
          >
            view all
          </button>
        </div>

        <div className="space-y-2 text-[11px]">
          <button
            onClick={() => { setSelectedProjectSlug('secure-file-vault'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#020A0F] hover:bg-[#071520] p-2 rounded border border-[#00F0FF]/25 transition-all cursor-pointer group"
          >
            <div className="text-[#F0F8FF] font-semibold group-hover:text-[#00F0FF] flex items-center justify-between">
              <span>Secure File Vault</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#8DAAC0] text-[10px]">Go + React + PostgreSQL</div>
          </button>

          <button
            onClick={() => { setSelectedProjectSlug('shellb'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#020A0F] hover:bg-[#071520] p-2 rounded border border-[#00F0FF]/25 transition-all cursor-pointer group"
          >
            <div className="text-[#F0F8FF] font-semibold group-hover:text-[#00F0FF] flex items-center justify-between">
              <span>shellB Shell</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#8DAAC0] text-[10px]">C++ Unix REPL + POSIX</div>
          </button>

          <button
            onClick={() => { setSelectedProjectSlug('deribit-oems'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#020A0F] hover:bg-[#071520] p-2 rounded border border-[#00F0FF]/25 transition-all cursor-pointer group"
          >
            <div className="text-[#F0F8FF] font-semibold group-hover:text-[#00F0FF] flex items-center justify-between">
              <span>Deribit OEMS</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#8DAAC0] text-[10px]">C++20 + Boost.Beast</div>
          </button>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2 border-[#B800FF]/40">
        <div className="flex items-center space-x-2 text-[#B800FF] border-b border-[#B800FF]/30 pb-2 font-bold">
          <Award className="w-4 h-4" />
          <span>VERIFIED BADGES</span>
        </div>

        <div className="space-y-1.5 pt-1 text-[11px] text-[#F0F8FF]">
          <div className="flex justify-between items-center">
            <span>AWS SAA</span>
            <span className="text-[#39FF14] font-bold">Certified</span>
          </div>
          <div className="flex justify-between items-center">
            <span>LeetCode Contest</span>
            <span className="text-[#00F0FF] font-bold">#408</span>
          </div>
          <div className="flex justify-between items-center">
            <span>CodeChef</span>
            <span className="text-[#B800FF] font-bold">Top 14%</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
