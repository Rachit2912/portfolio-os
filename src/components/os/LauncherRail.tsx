"use client";

import React, { useState } from 'react';
import {
  Terminal,
  FolderGit2,
  User,
  FileText,
  Mail,
  Sparkles,
  GitBranch,
  Monitor,
  Settings
} from 'lucide-react';
import { useOSStore, WorkspaceTab } from '@/store/useOSStore';
import { SettingsModal } from './SettingsModal';

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
  const [settingsOpen, setSettingsOpen] = useState(false);

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
    <aside className="w-22 sm:w-28 bg-[#05140A] border-r border-[#39FF14]/30 flex flex-col items-center py-3 space-y-2 z-20 select-none shrink-0 overflow-y-auto">
      {LAUNCHER_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = activeWorkspace === item.id;

        return (
          <div key={item.id} className="relative group flex flex-col items-center w-full px-1.5">
            <button
              onClick={() => handleSelect(item)}
              aria-label={item.label}
              className={`w-full py-2 px-1 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                isActive
                  ? 'bg-[#39FF14]/20 border-2 border-[#39FF14] text-[#39FF14] glow-green-sm'
                  : 'bg-[#0A1C10] border border-[#39FF14]/15 text-[#70A080] hover:text-[#39FF14] hover:border-[#39FF14]/50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-mono mt-1 font-bold whitespace-nowrap tracking-tight">
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

      <div className="mt-auto pt-2 w-full px-1.5 border-t border-[#39FF14]/20">
        <button
          onClick={() => setSettingsOpen(true)}
          aria-label="Settings"
          className="w-full py-2 px-1 rounded-lg bg-[#0A1C10] border border-[#39FF14]/30 text-[#39FF14] hover:bg-[#39FF14]/20 hover:border-[#39FF14] transition-all cursor-pointer flex flex-col items-center justify-center glow-green-sm"
          title="System Settings / Change Theme Color"
        >
          <Settings className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
          <span className="text-[10px] font-mono mt-1 font-bold whitespace-nowrap">
            Settings
          </span>
        </button>
      </div>

      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </aside>
  );
};
