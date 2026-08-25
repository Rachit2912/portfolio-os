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
    if (item.id === 'easter-egg-matrix') {
      useOSStore.getState().toggleMatrixMode(true);
      return;
    }
    setActiveWorkspace(item.id);
    if (item.id === 'projects') setCurrentPath('~/projects');
    else if (item.id === 'about') setCurrentPath('~/about.md');
    else if (item.id === 'experience') setCurrentPath('~/experience');
    else if (item.id === 'resume') setCurrentPath('~/resume');
    else if (item.id === 'contact') setCurrentPath('~/contact');
    else if (item.id === 'desktop') setCurrentPath('~');
  };

  return (
    <aside className="w-16 sm:w-20 bg-[#05140A] border-r border-[#39FF14]/30 flex flex-col items-center py-4 space-y-3 z-20 select-none shrink-0">
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
                  ? 'bg-[#39FF14]/20 border-2 border-[#39FF14] text-[#39FF14] glow-green-sm'
                  : 'bg-[#0A1C10] border border-[#39FF14]/15 text-[#70A080] hover:text-[#39FF14] hover:border-[#39FF14]/50'
              }`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-[9px] font-mono mt-0.5 tracking-tighter truncate max-w-full font-bold">
                {item.label}
              </span>
            </button>

            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden group-hover:flex flex-col bg-[#0A1C10] border border-[#39FF14] text-[#E8FFE8] p-2.5 rounded shadow-2xl z-50 text-xs font-mono whitespace-nowrap glow-green-sm">
              <span className="font-extrabold text-[#39FF14]">{item.label}</span>
              <span className="text-[10px] text-[#00FF66]">CLI: {item.commandHint}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
};
