"use client";

import React from 'react';
import { Cpu, Award, Code2, ExternalLink, Activity } from 'lucide-react';
import { profileData } from '@/data/profile';
import { useOSStore } from '@/store/useOSStore';

export const HudPanel: React.FC = () => {
  const { setActiveWorkspace, setSelectedProjectSlug } = useOSStore();

  return (
    <aside className="w-80 bg-[#05140A]/90 border-l border-[#39FF14]/30 p-4 hidden xl:flex flex-col space-y-5 text-xs font-mono overflow-y-auto z-20">
      <div className="os-panel p-3.5 space-y-2 border-[#39FF14]/40 glow-green-sm">
        <div className="flex items-center justify-between text-[#39FF14] border-b border-[#39FF14]/30 pb-2">
          <div className="flex items-center space-x-2 font-bold text-glow-green">
            <Cpu className="w-4 h-4 text-[#39FF14]" />
            <span>ENGINEER PROFILE</span>
          </div>
          <span className="text-[10px] bg-[#39FF14]/15 border border-[#39FF14]/40 px-1.5 py-0.5 rounded text-[#39FF14] font-bold">LIVE</span>
        </div>

        <div className="space-y-1.5 pt-1 text-[#E8FFE8]">
          <div><span className="text-[#70A080]">NAME:</span> {profileData.name}</div>
          <div><span className="text-[#70A080]">DEGREE:</span> VIT B.Tech IT</div>
          <div><span className="text-[#70A080]">GPA:</span> {profileData.education.gpa}</div>
          <div><span className="text-[#70A080]">CURRENT:</span> Hitwicket SDE Intern</div>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2 border-[#00FF66]/40">
        <div className="flex items-center space-x-2 text-[#00FF66] border-b border-[#00FF66]/30 pb-2 font-bold text-glow-green">
          <Activity className="w-4 h-4" />
          <span>PRODUCTION IMPACT</span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
          <div className="bg-[#030D06] p-2 rounded border border-[#39FF14]/30 text-center">
            <div className="text-[#39FF14] font-bold text-sm">+49%</div>
            <div className="text-[#70A080] text-[9px]">Payer Conv.</div>
          </div>
          <div className="bg-[#030D06] p-2 rounded border border-[#39FF14]/30 text-center">
            <div className="text-[#39FF14] font-bold text-sm">+52%</div>
            <div className="text-[#70A080] text-[9px]">Sales Impact</div>
          </div>
          <div className="bg-[#030D06] p-2 rounded border border-[#00FF66]/30 text-center">
            <div className="text-[#00FF66] font-bold text-sm">30s → 10s</div>
            <div className="text-[#70A080] text-[9px]">SLT Exec</div>
          </div>
          <div className="bg-[#030D06] p-2 rounded border border-[#00FF66]/30 text-center">
            <div className="text-[#00FF66] font-bold text-sm">+$100/d</div>
            <div className="text-[#70A080] text-[9px]">Ad Revenue</div>
          </div>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2.5 border-[#39FF14]/30">
        <div className="flex items-center justify-between text-[#39FF14] border-b border-[#39FF14]/30 pb-2 font-bold">
          <div className="flex items-center space-x-2">
            <Code2 className="w-4 h-4 text-[#39FF14]" />
            <span>FEATURED SYSTEMS</span>
          </div>
          <button
            onClick={() => setActiveWorkspace('projects')}
            className="text-[10px] text-[#39FF14] hover:underline cursor-pointer"
          >
            view all
          </button>
        </div>

        <div className="space-y-2 text-[11px]">
          <button
            onClick={() => { setSelectedProjectSlug('supply-lens'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#030D06] hover:bg-[#0A1C10] p-2 rounded border border-[#39FF14]/25 transition-all cursor-pointer group"
          >
            <div className="text-[#E8FFE8] font-semibold group-hover:text-[#39FF14] flex items-center justify-between">
              <span>Supply Lens</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#70A080] text-[10px]">TypeScript + Next.js + AI</div>
          </button>

          <button
            onClick={() => { setSelectedProjectSlug('secure-file-vault'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#030D06] hover:bg-[#0A1C10] p-2 rounded border border-[#39FF14]/25 transition-all cursor-pointer group"
          >
            <div className="text-[#E8FFE8] font-semibold group-hover:text-[#39FF14] flex items-center justify-between">
              <span>Secure File Vault</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#70A080] text-[10px]">Go + React + PostgreSQL</div>
          </button>

          <button
            onClick={() => { setSelectedProjectSlug('shellb'); setActiveWorkspace('projects'); }}
            className="w-full text-left bg-[#030D06] hover:bg-[#0A1C10] p-2 rounded border border-[#39FF14]/25 transition-all cursor-pointer group"
          >
            <div className="text-[#E8FFE8] font-semibold group-hover:text-[#39FF14] flex items-center justify-between">
              <span>shellB Shell</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </div>
            <div className="text-[#70A080] text-[10px]">C++ POSIX UNIX REPL</div>
          </button>
        </div>
      </div>

      <div className="os-panel p-3.5 space-y-2 border-[#39FF14]/40">
        <div className="flex items-center space-x-2 text-[#39FF14] border-b border-[#39FF14]/30 pb-2 font-bold">
          <Award className="w-4 h-4" />
          <span>VERIFIED BADGES</span>
        </div>

        <div className="space-y-1.5 pt-1 text-[11px] text-[#E8FFE8]">
          <div className="flex justify-between items-center">
            <span>AWS SAA</span>
            <span className="text-[#39FF14] font-bold">Certified</span>
          </div>
          <div className="flex justify-between items-center">
            <span>LeetCode Contest</span>
            <span className="text-[#00FF66] font-bold">#408</span>
          </div>
          <div className="flex justify-between items-center">
            <span>CodeChef</span>
            <span className="text-[#00FF66] font-bold">Top 14%</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
