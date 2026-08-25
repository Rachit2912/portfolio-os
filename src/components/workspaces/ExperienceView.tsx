"use client";

import React from 'react';
import { GitCommit, Calendar, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import { experienceData } from '@/data/experience';

import { useOSStore } from '@/store/useOSStore';

export const ExperienceView: React.FC = () => {
  const { themeColor } = useOSStore();

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs bg-[#020904]">
      <div
        className="os-panel p-5 glow-green-sm space-y-2 border"
        style={{ borderColor: 'var(--border-bright)' }}
      >
        <div className="flex items-center space-x-2 text-theme">
          <GitCommit className="w-5 h-5 text-theme" />
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#E8FFE8]">
            git log --experience
          </h1>
        </div>
        <p className="text-[#70A080] text-xs">
          Verified professional experience timeline presented as commit history with verified resume impact metrics.
        </p>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative pl-8 space-y-3">
            <div
              className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#030D06] border-2 flex items-center justify-center glow-green-sm z-10"
              style={{ borderColor: themeColor }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }} />
            </div>

            <div
              className="os-panel p-5 space-y-4 border transition-all"
              style={{ borderColor: 'var(--border-dim)' }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b pb-3" style={{ borderColor: 'var(--border-dim)' }}>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-theme font-bold text-sm">{exp.company}</span>
                    <span
                      className="border px-2 py-0.5 rounded text-[10px] font-bold"
                      style={{ backgroundColor: `${themeColor}20`, borderColor: 'var(--border-bright)', color: themeColor }}
                    >
                      {exp.role}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#70A080] text-[11px]">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-theme" />
                      <span>{exp.period}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-theme" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div
                  className="bg-[#030D06] px-2.5 py-1 rounded border text-theme text-[10px] font-bold"
                  style={{ borderColor: 'var(--border-dim)' }}
                >
                  commit {exp.commitHash}
                </div>
              </div>

              <p className="text-[#E8FFE8] text-xs leading-relaxed">{exp.summary}</p>

              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-theme font-bold text-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-theme" />
                  <span>VERIFIED PRODUCTION IMPACT METRICS</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {exp.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-[#030D06] p-2.5 rounded border text-center space-y-0.5"
                      style={{ borderColor: 'var(--border-dim)' }}
                    >
                      <div className="text-theme font-extrabold text-sm sm:text-base">{metric.value}</div>
                      <div className="text-[#70A080] text-[9px] truncate">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-theme font-bold text-xs">Key Responsibilities & Deliverables</div>
                <ul className="space-y-1 text-[#70A080] text-xs">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-theme shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: 'var(--border-dim)' }}>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#030D06] border px-2 py-0.5 rounded text-theme text-[10px] font-semibold"
                    style={{ borderColor: 'var(--border-dim)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
