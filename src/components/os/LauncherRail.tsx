"use client";

import React from 'react';
import {
  Terminal,
  FolderGit2,
  User,
  FileText,
  Mail,
  Sparkles,
  GitBranch,
  Monitor
} from 'lucide-react';
import { useOSStore, WorkspaceTab } from '@/store/useOSStore';

interface LauncherItem {
  id: WorkspaceTab;
  label: string;
  commandHint: string;
  icon: React.ComponentType<{ className?: string }>;
}

const LAUNCHER_ITEMS: LauncherItem[] = [
  { id: 'desktop', label: 'Desktop', commandHint: 'exit', icon: Monitor },
  { id: 'terminal', label: 'Terminal', commandHint: 'cat help', icon: Terminal },
  { id: 'projects', label: 'Projects', commandHint: 'ls ~/projects', icon: FolderGit2 },
  { id: 'about', label: 'About', commandHint: 'neofetch', icon: User },
  { id: 'experience', label: 'Experience', commandHint: 'git log', icon: GitBranch },
  { id: 'resume', label: 'Resume', commandHint: 'cat resume.md', icon: FileText },
  { id: 'contact', label: 'Contact', commandHint: './contact', icon: Mail },
  { id: 'easter-egg-matrix', label: 'Matrix Mode', commandHint: 'matrix', icon: Sparkles },
];

export const LauncherRail: React.FC = () => {
  const { activeWorkspace, setActiveWorkspace, setCurrentPath } = useOSStore();

  const handleSelect = (item: LauncherItem) => {
    setActiveWorkspace(item.id);
    if (item.id === 'projects') setCurrentPath('~/projects');
    else if (item.id === 'about') setCurrentPath('~/about.md');
    else if (item.id === 'experience') setCurrentPath('~/experience');
    else if (item.id === 'resume') setCurrentPath('~/resume');
    else if (item.id === 'contact') setCurrentPath('~/contact');
    else if (item.id === 'desktop') setCurrentPath('~');
  };

  return (
    <aside className="w-16 sm:w-20 bg-[#07100D] border-r border-[#42F59B]/20 flex flex-col items-center py-4 space-y-3 z-20 select-none shrink-0">
      {LAUNCHER_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeWorkspace === item.id;

        return (
          <div key={item.id} className="relative group flex flex-col items-center w-full px-2">
            <button
              onClick={() => handleSelect(item)}
              aria-label={item.label}
              className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                isActive
                  ? 'bg-[#42F59B]/20 border border-[#42F59B] text-[#42F59B] glow-green-sm'
                  : 'bg-[#0A1411] border border-[#42F59B]/10 text-[#9DB2A8] hover:text-[#42F59B] hover:border-[#42F59B]/40'
              }`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-[9px] font-mono mt-0.5 tracking-tighter truncate max-w-full">
                {item.label}
              </span>
            </button>

            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#0A1411] border border-[#42F59B] text-[#F1F7F3] p-2 rounded shadow-xl z-50 text-xs font-mono whitespace-nowrap">
              <span className="font-bold text-[#42F59B]">{item.label}</span>
              <span className="text-[10px] text-[#44E8FF]">CLI: {item.commandHint}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
};
