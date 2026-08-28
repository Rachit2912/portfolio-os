"use client";

import React, { useState } from 'react';
import {
  Terminal,
  FolderGit2,
  User,
  FileText,
  Mail,
  Gamepad2,
  GitBranch,
  Monitor,
  Settings
} from 'lucide-react';
import { useOSStore, WorkspaceTab } from '@/store/useOSStore';
import { SettingsModal } from './SettingsModal';
import { GamesFunModal } from './GamesFunModal';

interface LauncherItem {
  id: WorkspaceTab | 'games-fun';
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
  { id: 'games-fun', label: 'Games & Fun', commandHint: 'snake / tetris / matrix', icon: Gamepad2 },
];

export const LauncherRail: React.FC = () => {
  const { activeWorkspace, setActiveWorkspace, setCurrentPath, themeColor } = useOSStore();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);

  const handleSelect = (item: LauncherItem) => {
    if (item.id === 'games-fun') {
      setGamesOpen(true);
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
    <>
      {/* Desktop Left Sidebar */}
      <aside
        className="hidden md:flex w-28 bg-[#05140A] border-r flex-col items-center py-3 space-y-2 z-20 select-none shrink-0 overflow-y-auto"
        style={{ borderColor: 'var(--border-dim)' }}
      >
        {LAUNCHER_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeWorkspace === item.id;

          return (
            <div key={item.id} className="relative group flex flex-col items-center w-full px-1.5">
              <button
                onClick={() => handleSelect(item)}
                aria-label={item.label}
                style={{
                  borderColor: isActive ? themeColor : 'var(--border-dim)',
                  backgroundColor: isActive ? `${themeColor}30` : '#0A1C10',
                  color: isActive ? themeColor : '#70A080'
                }}
                className="w-full py-2 px-1 rounded-lg flex flex-col items-center justify-center transition-all cursor-pointer relative border font-bold"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-mono mt-1 font-bold whitespace-nowrap tracking-tight">
                  {item.label}
                </span>
              </button>

              <div
                style={{ borderColor: themeColor }}
                className="fixed left-30 pointer-events-none hidden group-hover:flex flex-col bg-[#0A1C10] border text-[#E8FFE8] p-2.5 rounded shadow-2xl z-[100] text-xs font-mono whitespace-nowrap glow-green-sm"
              >
                <span className="font-extrabold" style={{ color: themeColor }}>{item.label}</span>
                <span className="text-[10px]" style={{ color: themeColor }}>CLI: {item.commandHint}</span>
              </div>
            </div>
          );
        })}

        <div className="mt-auto pt-2 w-full px-1.5 border-t border-white/15">
          <button
            onClick={() => setSettingsOpen(true)}
            aria-label="Settings"
            style={{ borderColor: themeColor, color: themeColor }}
            className="w-full py-2 px-1 rounded-lg bg-[#0A1C10] border hover:bg-[#39FF14]/20 transition-all cursor-pointer flex flex-col items-center justify-center glow-green-sm"
            title="System Settings / Change Theme Color"
          >
            <Settings className="w-5 h-5" />
            <span className="text-[10px] font-mono mt-1 font-bold whitespace-nowrap">
              Settings
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-[#05140A]/95 backdrop-blur-md border-t flex items-center justify-around px-1 z-40 select-none overflow-x-auto"
        style={{ borderColor: 'var(--border-dim)' }}
      >
        {LAUNCHER_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeWorkspace === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              aria-label={item.label}
              style={{
                color: isActive ? themeColor : '#70A080'
              }}
              className={`flex flex-col items-center justify-center p-1 rounded-md transition-all cursor-pointer shrink-0 min-w-[52px] ${
                isActive ? 'font-extrabold text-glow-green scale-105' : 'opacity-75'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] font-mono mt-0.5 tracking-tighter truncate max-w-[56px]">
                {item.label}
              </span>
            </button>
          );
        })}

        <button
          onClick={() => setSettingsOpen(true)}
          aria-label="Settings"
          style={{ color: themeColor }}
          className="flex flex-col items-center justify-center p-1 rounded-md transition-all cursor-pointer shrink-0 min-w-[50px] opacity-85"
        >
          <Settings className="w-4 h-4" />
          <span className="text-[9px] font-mono mt-0.5 tracking-tighter">
            Settings
          </span>
        </button>
      </nav>

      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <GamesFunModal isOpen={gamesOpen} onClose={() => setGamesOpen(false)} />
    </>
  );
};
