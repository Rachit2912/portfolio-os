"use client";

import React from 'react';
import { User, Cpu, GraduationCap, Award, Code2, CheckCircle } from 'lucide-react';
import { profileData } from '@/data/profile';

export const AboutView: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs bg-[#020904]">
      <div className="os-panel p-6 border-[#39FF14]/40 glow-green-sm space-y-3 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[#39FF14]">
              <User className="w-5 h-5" />
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#E8FFE8]">{profileData.name}</h1>
            </div>
            <p className="text-[#00FF66] font-semibold">{profileData.title}</p>
          </div>
          <div className="bg-[#030D06] px-3 py-1.5 rounded border border-[#39FF14]/30 text-[11px] text-[#39FF14] font-bold">
            STATUS: Open for Backend & Systems Roles
          </div>
        </div>

        <p className="text-[#70A080] text-sm leading-relaxed border-t border-[#39FF14]/15 pt-3">
          "{profileData.identityLine}"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="os-panel p-5 space-y-3 border-[#39FF14]/30">
          <div className="flex items-center space-x-2 text-[#39FF14] font-bold text-sm border-b border-[#39FF14]/20 pb-2">
            <GraduationCap className="w-4 h-4" />
            <span>EDUCATION & CREDENTIALS</span>
          </div>

          <div className="space-y-2 text-[#E8FFE8]">
            <div className="text-sm font-bold text-[#00FF66]">{profileData.education.institution}</div>
            <div className="text-[#70A080]">{profileData.education.degree}</div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-[#00FF66]">Period: {profileData.education.period}</span>
              <span className="bg-[#39FF14]/20 text-[#39FF14] border border-[#39FF14]/40 px-2 py-0.5 rounded font-bold">
                CGPA: {profileData.education.gpa}
              </span>
            </div>
          </div>
        </div>

        <div className="os-panel p-5 space-y-3 border-[#39FF14]/30">
          <div className="flex items-center space-x-2 text-[#39FF14] font-bold text-sm border-b border-[#39FF14]/20 pb-2">
            <Cpu className="w-4 h-4" />
            <span>CURRENT PRODUCTION WORK</span>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-[#E8FFE8]">{profileData.highlights.role}</div>
            <div className="text-[#70A080] text-xs leading-relaxed">{profileData.highlights.currentStory}</div>
            <div className="text-[11px] text-[#00FF66] font-semibold">{profileData.highlights.competitiveProgramming}</div>
          </div>
        </div>
      </div>

      <div className="os-panel p-5 space-y-4 border-[#39FF14]/20">
        <div className="flex items-center space-x-2 text-[#39FF14] font-bold text-sm border-b border-[#39FF14]/20 pb-2">
          <Code2 className="w-4 h-4" />
          <span>TECHNICAL SKILLS & DOMAIN INTERESTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-[#00FF66] font-semibold text-xs">Core Languages</div>
            <div className="flex flex-wrap gap-2">
              {profileData.highlights.coreLanguages.map((lang) => (
                <span key={lang} className="bg-[#030D06] border border-[#39FF14]/30 px-2.5 py-1 rounded text-[#39FF14] font-mono font-bold">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[#00FF66] font-semibold text-xs">Systems & Frameworks</div>
            <div className="flex flex-wrap gap-2">
              {profileData.highlights.coreSystems.map((sys) => (
                <span key={sys} className="bg-[#030D06] border border-[#39FF14]/30 px-2.5 py-1 rounded text-[#E8FFE8] font-mono">
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-[#39FF14]/10">
          <div className="text-[#39FF14] font-semibold text-xs">Engineering Domain Focus</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#70A080] text-xs">
            {profileData.highlights.engineeringInterests.map((interest, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="os-panel p-5 space-y-3 border-[#39FF14]/30">
        <div className="flex items-center space-x-2 text-[#39FF14] font-bold text-sm border-b border-[#39FF14]/20 pb-2">
          <Award className="w-4 h-4" />
          <span>SELECTED ACHIEVEMENTS & CERTIFICATIONS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {profileData.achievements.map((ach, idx) => (
            <div key={idx} className="bg-[#030D06] p-3 rounded border border-[#39FF14]/20 space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-[#E8FFE8] font-bold text-xs">{ach.title}</span>
                {ach.badge && (
                  <span className="bg-[#39FF14]/20 text-[#39FF14] text-[10px] px-1.5 py-0.5 rounded font-bold border border-[#39FF14]/30">
                    {ach.badge}
                  </span>
                )}
              </div>
              {ach.subtitle && <div className="text-[#70A080] text-[10px]">{ach.subtitle}</div>}
              {ach.date && <div className="text-[#00FF66] text-[10px]">{ach.date}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
