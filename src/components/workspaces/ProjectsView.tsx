"use client";

import React from 'react';
import {
  FolderGit2,
  ExternalLink,
  Code,
  Layers,
  Terminal,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projectsData } from '@/data/projects';
import { useOSStore } from '@/store/useOSStore';

export const ProjectsView: React.FC = () => {
  const { selectedProjectSlug, setSelectedProjectSlug, setCurrentPath } = useOSStore();

  const currentProject = projectsData.find((p) => p.slug === selectedProjectSlug) || projectsData[0];

  const handleSelectProject = (slug: string) => {
    setSelectedProjectSlug(slug);
    setCurrentPath(`~/projects/${slug}`);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden font-mono text-xs">
      <aside className="w-full md:w-72 bg-[#07100D] border-b md:border-b-0 md:border-r border-[#42F59B]/20 p-4 space-y-4 overflow-y-auto shrink-0 select-none">
        <div className="flex items-center space-x-2 text-[#42F59B] font-bold border-b border-[#42F59B]/20 pb-2">
          <FolderGit2 className="w-4 h-4" />
          <span>PROJECT FILESYSTEM</span>
        </div>

        <div className="space-y-1">
          <div className="text-[10px] text-[#44E8FF] uppercase tracking-wider font-semibold">
            Tier 1 // Featured Systems
          </div>
          {projectsData.filter((p) => p.tier === 'featured').map((p) => (
            <button
              key={p.slug}
              onClick={() => handleSelectProject(p.slug)}
              className={`w-full text-left px-3 py-2 rounded flex items-center justify-between transition-all cursor-pointer ${
                currentProject.slug === p.slug
                  ? 'bg-[#42F59B]/20 border border-[#42F59B] text-[#42F59B] font-bold glow-green-sm'
                  : 'bg-[#0A1411] border border-[#42F59B]/10 text-[#9DB2A8] hover:text-[#F1F7F3] hover:border-[#42F59B]/30'
              }`}
            >
              <div className="truncate pr-2">
                <div>{p.name}</div>
                <div className="text-[10px] text-[#9DB2A8]/80 font-normal">{p.languages.join(', ')}</div>
              </div>
              <span className="text-[9px] bg-[#050A08] px-1.5 py-0.5 rounded border border-[#42F59B]/20 shrink-0">
                {p.year}
              </span>
            </button>
          ))}
        </div>

        <div className="space-y-1 pt-2">
          <div className="text-[10px] text-[#A66CFF] uppercase tracking-wider font-semibold">
            Tier 2 // AI, CV & Native Tools
          </div>
          {projectsData.filter((p) => p.tier === 'secondary').map((p) => (
            <button
              key={p.slug}
              onClick={() => handleSelectProject(p.slug)}
              className={`w-full text-left px-3 py-2 rounded flex items-center justify-between transition-all cursor-pointer ${
                currentProject.slug === p.slug
                  ? 'bg-[#A66CFF]/20 border border-[#A66CFF] text-[#A66CFF] font-bold'
                  : 'bg-[#0A1411] border border-[#42F59B]/10 text-[#9DB2A8] hover:text-[#F1F7F3] hover:border-[#42F59B]/30'
              }`}
            >
              <div className="truncate pr-2">
                <div>{p.name}</div>
                <div className="text-[10px] text-[#9DB2A8]/80 font-normal">{p.languages.join(', ')}</div>
              </div>
              <span className="text-[9px] bg-[#050A08] px-1.5 py-0.5 rounded border border-[#A66CFF]/20 shrink-0">
                {p.year}
              </span>
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        <div className="os-panel p-5 border-[#42F59B]/30 space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="text-[#44E8FF] text-xs font-mono">{currentProject.path}</div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#F1F7F3]">{currentProject.name}</h1>
              <p className="text-[#9DB2A8] text-xs leading-relaxed">{currentProject.tagline}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href={currentProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#42F59B] text-[#020604] font-bold rounded flex items-center space-x-1.5 hover:bg-[#8CFFC5] transition-all glow-green-sm cursor-pointer"
              >
                <Code className="w-3.5 h-3.5" />
                <span>View Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#42F59B]/15">
            {currentProject.technologies.map((tech) => (
              <span key={tech} className="bg-[#050A08] border border-[#42F59B]/30 px-2 py-0.5 rounded text-[#8CFFC5] text-[11px]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="os-panel p-5 space-y-3 border-[#44E8FF]/30">
            <div className="flex items-center space-x-2 text-[#44E8FF] font-bold text-sm border-b border-[#44E8FF]/20 pb-2">
              <Layers className="w-4 h-4" />
              <span>PROBLEM & SOLUTION</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[#9DB2A8] font-bold text-[11px] mb-1">THE PROBLEM:</div>
                <div className="text-[#F1F7F3] text-xs leading-relaxed">{currentProject.problem}</div>
              </div>
              <div>
                <div className="text-[#42F59B] font-bold text-[11px] mb-1">THE SOLUTION:</div>
                <div className="text-[#F1F7F3] text-xs leading-relaxed">{currentProject.solution}</div>
              </div>
            </div>
          </div>

          <div className="os-panel p-5 space-y-3 border-[#42F59B]/30">
            <div className="flex items-center space-x-2 text-[#42F59B] font-bold text-sm border-b border-[#42F59B]/20 pb-2">
              <Cpu className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <p className="text-[#9DB2A8] text-xs leading-relaxed">{currentProject.architecture}</p>
            <div className="bg-[#050A08] p-3 rounded border border-[#42F59B]/20 text-[11px] text-[#44E8FF]">
              <span className="font-bold text-[#42F59B]">CLI Command: </span>
              <code>{currentProject.commands.cat}</code>
            </div>
          </div>
        </div>

        <div className="os-panel p-5 space-y-3 border-[#42F59B]/20">
          <div className="flex items-center space-x-2 text-[#42F59B] font-bold text-sm border-b border-[#42F59B]/20 pb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>KEY FEATURES & ENGINEERING DECISIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-[#8CFFC5] font-bold text-xs">Features Included</div>
              <ul className="space-y-1 text-[#9DB2A8] text-xs">
                {currentProject.keyFeatures.map((kf, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#42F59B]">•</span>
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[#44E8FF] font-bold text-xs">Architectural Decisions</div>
              <ul className="space-y-1 text-[#9DB2A8] text-xs">
                {currentProject.engineeringDecisions.map((ed, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#44E8FF]">•</span>
                    <span>{ed}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="os-panel p-5 border-[#42F59B]/30 space-y-3">
          <div className="flex items-center space-x-2 text-[#42F59B] font-bold text-sm border-b border-[#42F59B]/20 pb-2">
            <Terminal className="w-4 h-4" />
            <span>README.md PREVIEW</span>
          </div>

          <div className="prose prose-invert max-w-none text-xs text-[#F1F7F3] bg-[#050A08] p-4 rounded border border-[#42F59B]/20">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {currentProject.readmeContent}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
};
