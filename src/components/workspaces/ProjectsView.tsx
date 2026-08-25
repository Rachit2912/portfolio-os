"use client";

import React, { useState } from 'react';
import {
  FolderGit2,
  ExternalLink,
  Code,
  Layers,
  Terminal,
  CheckCircle2,
  Cpu,
  Globe,
  Server,
  Brain,
  Eye,
  Activity,
  BookOpen
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { projectsData } from '@/data/projects';
import { PortfolioTier } from '@/types/portfolio';
import { useOSStore } from '@/store/useOSStore';

import { DomainCategory } from '@/types/portfolio';

const DOMAIN_TABS: Array<{ id: DomainCategory | 'ALL'; label: string }> = [
  { id: 'ALL', label: 'All Domains' },
  { id: 'full-stack', label: 'Full-Stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'cpp-systems', label: 'C++ Systems' },
  { id: 'ai', label: 'AI' },
  { id: 'ml', label: 'ML' },
  { id: 'cv', label: 'Computer Vision' },
  { id: 'developer-tools', label: 'Frontend' },
  { id: 'hobby', label: 'Hobby' },
];

const getProjectDomainIcon = (p: { category: string; cliCategoryFolder: string }) => {
  if (p.cliCategoryFolder === 'ai' || p.category === 'ai') return Brain;
  if (p.cliCategoryFolder === 'cv' || p.category === 'cv' || p.category === 'computer-vision') return Eye;
  if (p.cliCategoryFolder === 'ml' || p.category === 'ml') return Activity;
  if (p.cliCategoryFolder === 'cpp-systems' || p.category === 'cpp-systems' || p.category === 'cpp') return Cpu;
  if (p.cliCategoryFolder === 'backend' || p.category === 'backend' || p.category === 'go') return Server;
  if (p.cliCategoryFolder === 'full-stack' || p.category === 'full-stack') return Layers;
  if (p.category === 'developer-tools' || p.category === 'cloud') return Globe;
  return Terminal;
};

export const ProjectsView: React.FC = () => {
  const { selectedProjectSlug, setSelectedProjectSlug, setCurrentPath } = useOSStore();
  const [activeCategory, setActiveCategory] = useState<DomainCategory | 'ALL'>('ALL');

  const filteredProjects = projectsData.filter((p) => {
    if (activeCategory === 'ALL') return true;
    return p.cliCategoryFolder === activeCategory || p.category === activeCategory;
  });

  const currentProject = projectsData.find((p) => p.slug === selectedProjectSlug) || filteredProjects[0] || projectsData[0];

  const handleSelectProject = (slug: string, cliPath: string) => {
    setSelectedProjectSlug(slug);
    setCurrentPath(cliPath);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row overflow-hidden font-mono text-xs bg-[#020904]">
      {/* Sidebar List */}
      <aside className="w-full md:w-80 bg-[#05140A] border-b md:border-b-0 md:border-r border-[#39FF14]/25 p-4 space-y-4 overflow-y-auto shrink-0 select-none">
        <div className="flex items-center space-x-2 text-[#39FF14] font-bold border-b border-[#39FF14]/20 pb-2">
          <FolderGit2 className="w-4 h-4" />
          <span>CANONICAL REPOSITORIES ({filteredProjects.length})</span>
        </div>

        {/* Domain Filter Tabs */}
        <div className="space-y-1.5">
          <div className="text-[10px] text-[#70A080] font-semibold uppercase tracking-wider">Domain Categories</div>
          <div className="flex flex-wrap gap-1">
            {DOMAIN_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-2 py-1 rounded text-[10px] transition-all cursor-pointer font-semibold ${
                  activeCategory === tab.id
                    ? 'bg-[#39FF14] text-[#020904] font-bold'
                    : 'bg-[#0A1C10] border border-[#39FF14]/20 text-[#70A080] hover:text-[#39FF14]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project List Items */}
        <div className="space-y-2 pt-2">
          {filteredProjects.map((p) => {
            const DomainIcon = getProjectDomainIcon(p);
            return (
              <button
                key={p.slug}
                onClick={() => handleSelectProject(p.slug, p.cliPath)}
                className={`w-full text-left px-3 py-2.5 rounded flex items-center justify-between transition-all cursor-pointer ${
                  currentProject.slug === p.slug
                    ? 'bg-[#39FF14]/20 border border-[#39FF14] text-[#39FF14] font-bold glow-green-sm'
                    : 'bg-[#0A1C10] border border-[#39FF14]/15 text-[#70A080] hover:text-[#E8FFE8] hover:border-[#39FF14]/40'
                }`}
              >
                <div className="truncate pr-2 space-y-0.5">
                  <div className="truncate font-semibold flex items-center space-x-1.5">
                    <DomainIcon className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />
                    <span className="truncate">{p.name}</span>
                  </div>
                  <div className="text-[10px] text-[#70A080] font-normal truncate">{p.categoryLabel}</div>
                </div>
                <span className="text-[9px] bg-[#030D06] px-1.5 py-0.5 rounded border border-[#39FF14]/20 text-[#00FF66] shrink-0 font-bold">
                  {p.year}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Project Details */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        <div className="os-panel p-5 border-[#39FF14]/30 space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1">
              <div className="text-[#39FF14] text-xs font-mono font-bold">{currentProject.cliPath}</div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#E8FFE8]">{currentProject.name}</h1>
              <div className="flex items-center space-x-2">
                <span className="bg-[#39FF14]/15 border border-[#39FF14]/40 px-2 py-0.5 rounded text-[10px] text-[#39FF14] font-bold">
                  {currentProject.categoryLabel}
                </span>
                <span className="bg-[#0A1C10] border border-[#39FF14]/30 px-2 py-0.5 rounded text-[10px] text-[#00FF66] font-bold uppercase">
                  {currentProject.portfolioTier.replace('_', ' ')}
                </span>
              </div>
              <p className="text-[#70A080] text-xs leading-relaxed pt-1">{currentProject.shortDescription}</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {currentProject.demoUrl && (
                <a
                  href={currentProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#00FF66] text-[#020904] font-bold rounded flex items-center space-x-1.5 hover:bg-[#39FF14] transition-all glow-green-sm cursor-pointer text-xs"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#0A1C10] border border-[#39FF14]/60 text-[#39FF14] font-bold rounded flex items-center space-x-1.5 hover:bg-[#39FF14]/20 transition-all cursor-pointer text-xs"
              >
                <Code className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-[#39FF14]/15">
            {currentProject.technologies.map((tech) => (
              <span key={tech} className="bg-[#030D06] border border-[#39FF14]/30 px-2 py-0.5 rounded text-[#00FF66] text-[11px] font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* What & Why Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="os-panel p-5 space-y-3 border-[#39FF14]/30">
            <div className="flex items-center space-x-2 text-[#39FF14] font-bold text-sm border-b border-[#39FF14]/20 pb-2">
              <Layers className="w-4 h-4" />
              <span>WHAT & WHY IT EXISTS</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-[#70A080] font-bold text-[11px] mb-1">THE PROBLEM IT SOLVES:</div>
                <div className="text-[#E8FFE8] text-xs leading-relaxed">{currentProject.problem}</div>
              </div>
              <div>
                <div className="text-[#39FF14] font-bold text-[11px] mb-1">THE IMPLEMENTATION SOLUTION:</div>
                <div className="text-[#E8FFE8] text-xs leading-relaxed">{currentProject.solution}</div>
              </div>
            </div>
          </div>

          <div className="os-panel p-5 space-y-3 border-[#39FF14]/30">
            <div className="flex items-center space-x-2 text-[#39FF14] font-bold text-sm border-b border-[#39FF14]/20 pb-2">
              <Cpu className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE</span>
            </div>
            <p className="text-[#70A080] text-xs leading-relaxed">{currentProject.architecture}</p>
            <div className="bg-[#030D06] p-3 rounded border border-[#39FF14]/20 text-[11px] text-[#00FF66]">
              <span className="font-bold text-[#39FF14]">CLI Equivalent Command: </span>
              <code>{currentProject.cliCommands.cat}</code>
            </div>
          </div>
        </div>

        {/* Engineering Highlights & Verified Features */}
        <div className="os-panel p-5 space-y-3 border-[#39FF14]/20">
          <div className="flex items-center space-x-2 text-[#39FF14] font-bold text-sm border-b border-[#39FF14]/20 pb-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>VERIFIED FEATURES & ENGINEERING HIGHLIGHTS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="text-[#00FF66] font-bold text-xs">Verified Features</div>
              <ul className="space-y-1 text-[#70A080] text-xs">
                {currentProject.keyFeatures.map((kf, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#39FF14]">•</span>
                    <span>{kf}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <div className="text-[#39FF14] font-bold text-xs">Engineering Highlights</div>
              <ul className="space-y-1 text-[#70A080] text-xs">
                {currentProject.engineeringHighlights.map((eh, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#39FF14]">•</span>
                    <span>{eh}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* README Preview */}
        <div className="os-panel p-5 border-[#39FF14]/30 space-y-3">
          <div className="flex items-center space-x-2 text-[#39FF14] font-bold text-sm border-b border-[#39FF14]/20 pb-2">
            <BookOpen className="w-4 h-4" />
            <span>CANONICAL README.md PREVIEW</span>
          </div>

          <div className="prose prose-invert max-w-none text-xs text-[#E8FFE8] bg-[#030D06] p-4 rounded border border-[#39FF14]/20">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {currentProject.readmeContent}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </div>
  );
};
