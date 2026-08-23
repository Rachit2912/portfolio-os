"use client";

import React from 'react';
import { Download, FileText } from 'lucide-react';
import { profileData } from '@/data/profile';
import { experienceData } from '@/data/experience';
import { projectsData } from '@/data/projects';

export const ResumeView: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs">
      <div className="os-panel p-5 border-[#42F59B]/40 glow-green-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[#42F59B]">
            <FileText className="w-5 h-5" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#F1F7F3]">
              ENGINEERING RESUME
            </h1>
          </div>
          <p className="text-[#9DB2A8] text-xs">
            Unified canonical engineering resume for Rachit Joshi.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2.5 bg-[#42F59B] text-[#020604] font-bold rounded flex items-center space-x-2 hover:bg-[#8CFFC5] transition-all glow-green-sm cursor-pointer shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>DOWNLOAD / PRINT PDF</span>
        </button>
      </div>

      <div className="os-panel p-6 sm:p-10 border-[#42F59B]/30 space-y-6 bg-[#050A08] text-[#F1F7F3] shadow-xl">
        <div className="border-b border-[#42F59B]/20 pb-4 space-y-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h2 className="text-2xl font-extrabold text-[#42F59B]">{profileData.name}</h2>
            <div className="text-xs text-[#44E8FF]">rachit29122003@gmail.com</div>
          </div>
          <div className="text-xs text-[#9DB2A8]">{profileData.title}</div>
          <div className="text-[11px] text-[#8CFFC5]">
            GitHub: github.com/Rachit2912 | LinkedIn: linkedin.com/in/rachit-joshi- | X: x.com/RachitJoshi29
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-bold text-[#42F59B] uppercase tracking-wider">Summary</h3>
          <p className="text-xs text-[#9DB2A8] leading-relaxed">{profileData.identityLine}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#42F59B] uppercase tracking-wider border-b border-[#42F59B]/15 pb-1">
            Work Experience
          </h3>
          {experienceData.map((exp) => (
            <div key={exp.id} className="space-y-1.5">
              <div className="flex justify-between items-center font-bold text-xs text-[#F1F7F3]">
                <span>{exp.company} — <span className="text-[#44E8FF]">{exp.role}</span></span>
                <span className="text-[#9DB2A8]">{exp.period}</span>
              </div>
              <p className="text-xs text-[#9DB2A8]">{exp.summary}</p>
              <div className="text-xs text-[#8CFFC5]">
                <span className="font-bold">Key Impact: </span>
                {exp.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#42F59B] uppercase tracking-wider border-b border-[#42F59B]/15 pb-1">
            Featured Systems Projects
          </h3>
          {projectsData.slice(0, 4).map((p) => (
            <div key={p.slug} className="space-y-1">
              <div className="flex justify-between items-center font-bold text-xs text-[#F1F7F3]">
                <span>{p.name} ({p.languages.join(', ')})</span>
                <span className="text-[#44E8FF]">{p.year}</span>
              </div>
              <p className="text-xs text-[#9DB2A8]">{p.tagline}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#42F59B]/15">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#42F59B] uppercase tracking-wider">Education</h3>
            <div className="text-xs text-[#F1F7F3] font-bold">{profileData.education.institution}</div>
            <div className="text-xs text-[#9DB2A8]">{profileData.education.degree}</div>
            <div className="text-xs text-[#44E8FF]">CGPA: {profileData.education.gpa} ({profileData.education.period})</div>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#42F59B] uppercase tracking-wider">Achievements</h3>
            <ul className="text-xs text-[#9DB2A8] space-y-0.5">
              {profileData.achievements.map((a, idx) => (
                <li key={idx}>• {a.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
