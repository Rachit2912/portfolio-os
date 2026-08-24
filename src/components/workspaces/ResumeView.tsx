"use client";

import React from 'react';
import { Download, FileText, Printer, ExternalLink } from 'lucide-react';
import { profileData } from '@/data/profile';
import { experienceData } from '@/data/experience';
import { projectsData } from '@/data/projects';

export const ResumeView: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full h-full overflow-y-auto p-4 sm:p-6 space-y-6 font-mono text-xs bg-[#020904]">
      <div className="os-panel p-5 border-[#39FF14]/40 glow-green-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-[#39FF14]">
            <FileText className="w-5 h-5" />
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#E8FFE8]">
              ENGINEERING RESUME
            </h1>
          </div>
          <p className="text-[#70A080] text-xs">
            Canonical engineering resume for Rachit Joshi. Download or preview below.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href="/resume.pdf"
            download="Rachit_Joshi_Resume.pdf"
            className="px-4 py-2.5 bg-[#39FF14] text-[#020904] font-bold rounded flex items-center space-x-2 hover:bg-[#00FF66] transition-all glow-green-sm cursor-pointer shrink-0 text-xs"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME PDF</span>
          </a>

          <button
            onClick={handlePrint}
            className="px-3 py-2.5 bg-[#0A1C10] border border-[#39FF14]/40 text-[#39FF14] font-bold rounded flex items-center space-x-1.5 hover:bg-[#39FF14]/15 transition-all cursor-pointer shrink-0 text-xs"
          >
            <Printer className="w-4 h-4" />
            <span>PRINT</span>
          </button>
        </div>
      </div>

      <div className="os-panel p-6 sm:p-10 border-[#39FF14]/30 space-y-6 bg-[#030D06] text-[#E8FFE8] shadow-xl">
        <div className="border-b border-[#39FF14]/20 pb-4 space-y-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h2 className="text-2xl font-extrabold text-[#39FF14]">{profileData.name}</h2>
            <div className="text-xs text-[#00FF66]">rachit29122003@gmail.com</div>
          </div>
          <div className="text-xs text-[#70A080]">{profileData.title}</div>
          <div className="text-[11px] text-[#00FF66]">
            GitHub: github.com/Rachit2912 | LinkedIn: linkedin.com/in/rachit-joshi- | X: x.com/rachitjoshi29
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-wider">Summary</h3>
          <p className="text-xs text-[#70A080] leading-relaxed">{profileData.identityLine}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-wider border-b border-[#39FF14]/15 pb-1">
            Work Experience
          </h3>
          {experienceData.map((exp) => (
            <div key={exp.id} className="space-y-1.5">
              <div className="flex justify-between items-center font-bold text-xs text-[#E8FFE8]">
                <span>{exp.company} — <span className="text-[#00FF66]">{exp.role}</span></span>
                <span className="text-[#70A080]">{exp.period}</span>
              </div>
              <p className="text-xs text-[#70A080]">{exp.summary}</p>
              <div className="text-xs text-[#00FF66]">
                <span className="font-bold">Key Impact: </span>
                {exp.metrics.map((m) => `${m.label}: ${m.value}`).join(' | ')}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-wider border-b border-[#39FF14]/15 pb-1">
            Featured Systems & Applications
          </h3>
          {projectsData.slice(0, 5).map((p) => (
            <div key={p.slug} className="space-y-1">
              <div className="flex justify-between items-center font-bold text-xs text-[#E8FFE8]">
                <span>{p.name} [{p.domainCategory}]</span>
                <span className="text-[#00FF66]">{p.year}</span>
              </div>
              <p className="text-xs text-[#70A080]">{p.tagline}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#39FF14]/15">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-wider">Education</h3>
            <div className="text-xs text-[#E8FFE8] font-bold">{profileData.education.institution}</div>
            <div className="text-xs text-[#70A080]">{profileData.education.degree}</div>
            <div className="text-xs text-[#00FF66]">CGPA: {profileData.education.gpa} ({profileData.education.period})</div>
          </div>

          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#39FF14] uppercase tracking-wider">Achievements</h3>
            <ul className="text-xs text-[#70A080] space-y-0.5">
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
