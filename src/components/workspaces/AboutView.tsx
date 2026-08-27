"use client";

import React from 'react';
import { User, Cpu, GraduationCap, Award, Code2, CheckCircle } from 'lucide-react';
import { profileData } from '@/data/profile';

import { useOSStore } from '@/store/useOSStore';

export const AboutView: React.FC = () => {
  const { themeColor } = useOSStore();

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs bg-[#020904]">
      <div
        className="os-panel p-6 glow-green-sm space-y-3 relative overflow-hidden border"
        style={{ borderColor: 'var(--border-bright)' }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-theme">
              <User className="w-5 h-5 text-theme" />
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#E8FFE8]">{profileData.name}</h1>
            </div>
            <p className="text-theme font-semibold">{profileData.title}</p>
          </div>
          <div
            className="bg-[#030D06] px-3 py-1.5 rounded border text-[11px] text-theme font-bold"
            style={{ borderColor: 'var(--border-dim)' }}
          >
            STATUS: Open for Backend & Systems Roles
          </div>
        </div>

        <p className="text-[#70A080] text-sm leading-relaxed border-t pt-3" style={{ borderColor: 'var(--border-dim)' }}>
          "{profileData.identityLine}"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="os-panel p-5 space-y-3 border" style={{ borderColor: 'var(--border-dim)' }}>
          <div className="flex items-center space-x-2 text-theme font-bold text-sm border-b pb-2" style={{ borderColor: 'var(--border-dim)' }}>
            <GraduationCap className="w-4 h-4 text-theme" />
            <span>EDUCATION & CREDENTIALS</span>
          </div>

          <div className="space-y-2 text-[#E8FFE8]">
            <div className="text-sm font-bold text-theme">{profileData.education.institution}</div>
            <div className="text-[#70A080]">{profileData.education.degree}</div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-theme">Period: {profileData.education.period}</span>
              <span
                className="border px-2 py-0.5 rounded font-bold"
                style={{ backgroundColor: `${themeColor}20`, borderColor: 'var(--border-bright)', color: themeColor }}
              >
                CGPA: {profileData.education.gpa}
              </span>
            </div>
          </div>
        </div>

        <div className="os-panel p-5 space-y-3 border" style={{ borderColor: 'var(--border-dim)' }}>
          <div className="flex items-center space-x-2 text-theme font-bold text-sm border-b pb-2" style={{ borderColor: 'var(--border-dim)' }}>
            <Cpu className="w-4 h-4 text-theme" />
            <span>CURRENT PRODUCTION WORK</span>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold text-[#E8FFE8]">{profileData.highlights.role}</div>
            <div className="text-[#70A080] text-xs leading-relaxed">{profileData.highlights.currentStory}</div>
            <div className="text-[11px] text-theme font-semibold">{profileData.highlights.competitiveProgramming}</div>
          </div>
        </div>
      </div>

      <div className="os-panel p-5 space-y-4 border" style={{ borderColor: 'var(--border-dim)' }}>
        <div className="flex items-center space-x-2 text-theme font-bold text-sm border-b pb-2" style={{ borderColor: 'var(--border-dim)' }}>
          <Code2 className="w-4 h-4 text-theme" />
          <span>TECHNICAL SKILLS & DOMAIN INTERESTS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-theme font-semibold text-xs">Core Languages</div>
            <div className="flex flex-wrap gap-2">
              {profileData.highlights.coreLanguages.map((lang) => (
                <span
                  key={lang}
                  className="bg-[#030D06] border px-2.5 py-1 rounded text-theme font-mono font-bold"
                  style={{ borderColor: 'var(--border-dim)' }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-theme font-semibold text-xs">Systems & Frameworks</div>
            <div className="flex flex-wrap gap-2">
              {profileData.highlights.coreSystems.map((sys) => (
                <span
                  key={sys}
                  className="bg-[#030D06] border px-2.5 py-1 rounded text-[#E8FFE8] font-mono"
                  style={{ borderColor: 'var(--border-dim)' }}
                >
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t" style={{ borderColor: 'var(--border-dim)' }}>
          <div className="text-theme font-semibold text-xs">Engineering Domain Focus</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#70A080] text-xs">
            {profileData.highlights.engineeringInterests.map((interest, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-3.5 h-3.5 text-theme shrink-0" />
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="os-panel p-5 space-y-3 border" style={{ borderColor: 'var(--border-dim)' }}>
        <div className="flex items-center space-x-2 text-theme font-bold text-sm border-b pb-2" style={{ borderColor: 'var(--border-dim)' }}>
          <Award className="w-4 h-4 text-theme" />
          <span>SELECTED ACHIEVEMENTS & CERTIFICATIONS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {profileData.achievements.map((ach, idx) => (
            <div key={idx} className="bg-[#030D06] p-3 rounded border space-y-1" style={{ borderColor: 'var(--border-dim)' }}>
              <div className="flex justify-between items-center">
                <span className="text-[#E8FFE8] font-bold text-xs">{ach.title}</span>
                {ach.badge && (
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded font-bold border"
                    style={{ backgroundColor: `${themeColor}20`, borderColor: 'var(--border-bright)', color: themeColor }}
                  >
                    {ach.badge}
                  </span>
                )}
              </div>
              {ach.subtitle && <div className="text-[#70A080] text-[10px]">{ach.subtitle}</div>}
              {ach.date && <div className="text-theme text-[10px]">{ach.date}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
