"use client";

import React from 'react';
import { GitCommit, Calendar, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import { experienceData } from '@/data/experience';

export const ExperienceView: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs">
      <div className="os-panel p-5 border-[#42F59B]/40 glow-green-sm space-y-2">
        <div className="flex items-center space-x-2 text-[#42F59B]">
          <GitCommit className="w-5 h-5" />
          <h1 className="text-xl sm:text-2xl font-extrabold text-[#F1F7F3]">
            git log --experience
          </h1>
        </div>
        <p className="text-[#9DB2A8] text-xs">
          Verified professional experience timeline presented as commit history with verified resume impact metrics.
        </p>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-[#42F59B]/20">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative pl-8 space-y-3">
            <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#050A08] border-2 border-[#42F59B] flex items-center justify-center glow-green-sm z-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#42F59B]" />
            </div>

            <div className="os-panel p-5 space-y-4 border-[#42F59B]/30 hover:border-[#42F59B]/60 transition-all">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#42F59B]/15 pb-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[#44E8FF] font-bold text-sm">{exp.company}</span>
                    <span className="bg-[#42F59B]/20 text-[#42F59B] px-2 py-0.5 rounded text-[10px] font-bold">
                      {exp.role}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-[#9DB2A8] text-[11px]">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#42F59B]" />
                      <span>{exp.period}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#44E8FF]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="bg-[#050A08] px-2.5 py-1 rounded border border-[#42F59B]/20 text-[#44E8FF] text-[10px]">
                  commit {exp.commitHash}
                </div>
              </div>

              <p className="text-[#F1F7F3] text-xs leading-relaxed">{exp.summary}</p>

              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 text-[#42F59B] font-bold text-xs">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>VERIFIED PRODUCTION IMPACT METRICS</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {exp.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#050A08] p-2.5 rounded border border-[#42F59B]/20 text-center space-y-0.5">
                      <div className="text-[#42F59B] font-extrabold text-sm sm:text-base">{metric.value}</div>
                      <div className="text-[#9DB2A8] text-[9px] truncate">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5 pt-1">
                <div className="text-[#44E8FF] font-bold text-xs">Key Responsibilities & Deliverables</div>
                <ul className="space-y-1 text-[#9DB2A8] text-xs">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#42F59B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#42F59B]/10">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="bg-[#050A08] border border-[#42F59B]/20 px-2 py-0.5 rounded text-[#8CFFC5] text-[10px]">
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
