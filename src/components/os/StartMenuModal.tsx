"use client";

import React, { useState } from 'react';
import {
  X,
  Search,
  FolderGit2,
  Terminal,
  User,
  GitBranch,
  FileText,
  Mail,
  Gamepad2,
  Sparkles,
  ExternalLink,
  Shield,
  Cpu
} from 'lucide-react';
import { useOSStore, WorkspaceTab } from '@/store/useOSStore';
import { socialLinks } from '@/data/links';

interface StartMenuItem {
  id: WorkspaceTab | 'easter-egg-matrix';
  title: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  cliCmd: string;
}

const MENU_ITEMS: StartMenuItem[] = [
  { id: 'projects', title: 'Projects Workspace', category: 'Engineering', description: 'Browse Tier 1, 2, and 3 software projects & repositories', icon: FolderGit2, cliCmd: 'projects' },
  { id: 'terminal', title: 'Interactive CLI REPL', category: 'System', description: 'POSIX terminal shell with neofetch, ls, cd, cat, tree', icon: Terminal, cliCmd: 'terminal' },
  { id: 'about', title: 'About Engineer', category: 'Profile', description: 'Identity, VIT Vellore education, & competitive programming', icon: User, cliCmd: 'about' },
  { id: 'experience', title: 'Work Experience Log', category: 'Profile', description: 'Hitwicket SDE Intern & SmartBridge AI internship metrics', icon: GitBranch, cliCmd: 'experience' },
  { id: 'resume', title: 'Resume Viewer & Download', category: 'Profile', description: 'Canonical resume view and PDF download link', icon: FileText, cliCmd: 'resume' },
  { id: 'contact', title: 'Direct Contact Form', category: 'Communication', description: 'Email composer with direct mailto & copy email features', icon: Mail, cliCmd: 'contact' },
  { id: 'game-snake', title: 'Matrix Snake Arcade', category: 'Games & Easter Eggs', description: 'Terminal Snake game with matrix green retro canvas grid', icon: Gamepad2, badge: 'NEW GAME', cliCmd: 'snake' },
  { id: 'game-tetris', title: 'Matrix Tetris Arcade', category: 'Games & Easter Eggs', description: 'Retro Tetris block game with line clearing & score tracking', icon: Gamepad2, badge: 'NEW GAME', cliCmd: 'tetris' },
  { id: 'easter-egg-matrix', title: 'Matrix Rain Mode', category: 'Games & Easter Eggs', description: 'Full screen digital matrix rain pulse visual effect', icon: Sparkles, cliCmd: 'matrix' },
];

interface StartMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartMenuModal: React.FC<StartMenuModalProps> = ({ isOpen, onClose }) => {
  const { setActiveWorkspace, setCurrentPath, toggleMatrixMode } = useOSStore();
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredItems = MENU_ITEMS.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase()) ||
    item.cliCmd.toLowerCase().includes(query.toLowerCase())
  );

  const handleLaunch = (item: StartMenuItem) => {
    if (item.id === 'easter-egg-matrix') {
      toggleMatrixMode(true);
    } else {
      setActiveWorkspace(item.id as WorkspaceTab);
      if (item.id === 'projects') setCurrentPath('~/projects');
      else if (item.id === 'about') setCurrentPath('~/about.md');
      else if (item.id === 'experience') setCurrentPath('~/experience');
      else if (item.id === 'resume') setCurrentPath('~/resume');
      else if (item.id === 'contact') setCurrentPath('~/contact');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020904]/80 backdrop-blur-sm select-none">
      <div
        className="w-full max-w-2xl bg-[#030D06] border-2 border-[#39FF14] rounded-lg shadow-2xl glow-green p-4 sm:p-6 space-y-4 font-mono text-xs overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#39FF14]/30 pb-3">
          <div className="flex items-center space-x-2 text-[#39FF14]">
            <Shield className="w-5 h-5" />
            <h2 className="text-base font-extrabold tracking-wide text-[#E8FFE8]">
              RACHIT_PORTFOLIO_OS // START MENU
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#70A080] hover:text-[#FF2A55] transition-colors rounded cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#39FF14]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps, games, CLI commands (e.g., snake, projects, resume)..."
            className="w-full pl-9 pr-4 py-2.5 bg-[#0A1C10] border border-[#39FF14]/40 rounded text-[#39FF14] placeholder-[#70A080] focus:outline-none focus:border-[#39FF14] text-xs"
            autoFocus
          />
        </div>

        {/* Menu Grid */}
        <div className="max-h-80 overflow-y-auto space-y-3 pr-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLaunch(item)}
                  className="flex items-start space-x-3 p-3 bg-[#0A1C10] border border-[#39FF14]/20 hover:border-[#39FF14] hover:bg-[#39FF14]/10 rounded transition-all text-left group cursor-pointer"
                >
                  <div className="p-2 rounded bg-[#030D06] border border-[#39FF14]/30 text-[#39FF14] group-hover:glow-green-sm shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-[#E8FFE8] group-hover:text-[#39FF14] truncate">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="px-1.5 py-0.2 bg-[#39FF14] text-[#020904] text-[9px] font-extrabold rounded">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[#70A080] text-[11px] truncate">{item.description}</p>
                    <p className="text-[#00FF66] text-[10px] font-mono">CLI: {item.cliCmd}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer info & external links */}
        <div className="border-t border-[#39FF14]/20 pt-3 flex flex-col sm:flex-row justify-between items-center text-[11px] text-[#70A080] gap-2">
          <div className="flex items-center space-x-3">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-[#00FF66] hover:text-[#39FF14] flex items-center space-x-1"
              >
                <span>{link.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-1 text-[#39FF14] font-bold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Rachit Joshi // VIT Vellore</span>
          </div>
        </div>
      </div>
    </div>
  );
};
